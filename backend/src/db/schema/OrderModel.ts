import { Schema, model as type } from 'mongoose'

const OrderSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    OrderItems: [
        {
            Name: { type: String, required: true },
            QTY: { type: Number, required: true },
            ING: { type: String, required: true },
            Price: { type: Number, required: true },
            Product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    ShippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    PaymentMethod: {
        type: String,
        required: true,
    },
    PaymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    ItemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    TaxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    ShippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    TotalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    IsPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    PaidAt: {
        type: Date,
    },
    IsDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    DeliveredAt: {
        type: Date,
    },

}, {
    timestamps: true
})






export const OrderModel = type('Order', OrderSchema)
