import {asyncWrapper} from '../middleware/asyncWrapper.js';
import { Product } from '../model/product.model.js';

export const addProduct = asyncWrapper(async(req, res) => {
   const { productName, productDescription, image, price, rating } = req.body;
   if(!productName || !productDescription || !image || !price){
    return res.status(400).json({ msg: "Product name, Product Description, Image, Price are required field"});
   }
   const newProduct = await Product.create({
    productName,
    productDescription,
    image,
    price,
    rating
   })

   res.status(200).json(newProduct);
})

export const getProducts = asyncWrapper(async(req, res) => {
    const allProducts = await Product.find({});
    res.status(200).json({total: allProducts.length, products: allProducts});
})

export const searchProductByTitleOrDescription = asyncWrapper(async(req, res) => {
    const { searchTerm } = req.query;

   const searchProduct = await Product.find({
    ...(searchTerm && {
        $or: [
            {productName: {$regex: searchTerm, $options: 'i'}},
            {productDescription: {$regex: searchTerm, $options: 'i'}}

        ]
    })
   })

   res.status(200).json({total: searchProduct.length, searchProduct});
})