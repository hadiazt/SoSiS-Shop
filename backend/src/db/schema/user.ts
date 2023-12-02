import { Schema, model as type } from 'mongoose'

const UsersSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    IsAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

}, {
    timestamps: true
})
export const UsersModel = type('Users', UsersSchema)
