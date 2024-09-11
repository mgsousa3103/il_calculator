import mongoose from "mongoose";
import { MongooseConnection } from "./mongoose.interface";

const MONGODB_URL = process.env.MONGODB_URL

// Caching connection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!MONGODB_URL) {
        throw new Error("Missing MongoDB URL")
    }

    cached.promise =
        cached.promise ||
        mongoose.connect(MONGODB_URL, {
            dbName: "il_calculator",
            bufferCommands: false
        })

    cached.conn = await cached.promise

    return cached.conn
}