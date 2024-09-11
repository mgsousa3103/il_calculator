import { model, models, Schema } from "mongoose";

export type IUser = {
    clerkId: string;
    email: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    photo: string;
}

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
})

const User = models?.User || model("User", UserSchema)
export default User