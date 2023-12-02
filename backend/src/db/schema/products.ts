import { Schema, model as type } from 'mongoose'
import { ReviewSchema } from './review'

const ProductSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    Name: {
        type: String,
        required: true
    },
    IMG: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    CountInStock: {
        type: Number,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Reviews: [ReviewSchema],
    NumReviews: {
        type: Number,
        required: true,
        default: 0
    },

    Features: Array<{
        Name: String,
        Des: String,
    }>,
    Warranty: Number,
}, {
    timestamps: true
})

export const ProductModel = type('Products', ProductSchema)