import { Schema, model as type } from 'mongoose'

export const ReviewSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    Name: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})