import { WebhookEvent, clerkClient } from "@clerk/nextjs/server"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { Webhook } from "svix"

import { createUser } from "@/app/_actions/user.actions"

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to your .env or .env.local file")
    }

    // Get the headers
    const headerPayload = headers()
    const svix_id = headerPayload.get("svix-id")
    const svix_timestamp = headerPayload.get("svix-timestamp")
    const svix_signature = headerPayload.get("svix-signature")

    // Check the headers
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error occured -- no svix headers", { status: 400 })
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with thse secret
    const wh = new Webhook(WEBHOOK_SECRET)

    let event: WebhookEvent;

    // Verify the payload with the headers
    try {
        event = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (error) {
        console.error("Error verifying the webhook: ", error)
        return new Response("Error occured", { status: 400 })
    }

    //  Get the ID and type
    const { id } = event.data
    const eventType = event.type

    // Create
    if (eventType === "user.created") {
        const { id, email_addresses, username, first_name, last_name, image_url } = event.data

        const user = {
            clerkId: id,
            email: email_addresses[0].email_address,
            username: username,
            firstName: first_name,
            lastName: last_name,
            photo: image_url,
        }

        const newUser = await createUser(user)

        if (newUser) {
            await clerkClient.users.updateUserMetadata(id, {
                publicMetadata: {
                    userId: newUser._id
                }
            })
        }

        return NextResponse.json({ message: "OK", user: newUser })
    }

    console.log(`Webhook with an ID of ${id} and type of ${eventType}`)
    console.log(`Webhook body:`, body)

    return new Response("", { status: 200 })
}