import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
    },
    productDescription: {
        type: String,
        required: [true, 'Product description is required'],
        min: [6, 'Description detail should be atleast 6 characters'],
        max: [100, 'Description detail should not be more than 100 characters']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
    },
    rating: {
        type: Number,
        default : 3.3
    }

}, { timestamps: true });

export const Product = model('product', productSchema);