import mongoose, { Schema, Document } from "mongoose"

interface IUser extends Document {
    name: string;
    username: string;
    password: string;
    role: string;
}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

UserSchema.set('toJSON', {
    transform: function (_: any, ret: IUser) {
        const retJson = {
            id: ret._id,
            name: ret.name,
            username: ret.username,
            role: ret.role
        };
        return retJson;
    }
});

const User = mongoose.model<IUser>("User", UserSchema)

export { User }

