import { connectToDatabase } from "@/adapters/mongoose/mongoose";
import User, { IUser } from "@/database/models/user/user.model";
import { handleError, parseStringfy } from "@/lib/utils";

// Create a new user
export const createUser = async (user: IUser) => {
    try {
        await connectToDatabase()

        const newUser = await User.create(user)

        return parseStringfy(newUser)
    } catch (error) {
        handleError(error)
    }
}