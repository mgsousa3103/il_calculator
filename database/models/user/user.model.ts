import { Model, model, models, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId: string
    email: string
    username: string
    photo: string
    firstName: string
    lastName: string
}

const UserSchema: Schema<IUser> = new Schema({
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

const User: Model<IUser> = models?.User || model<IUser>("User", UserSchema)
export default User