import express from 'express';
import { addProduct, getProducts, searchProductByTitleOrDescription } from '../controller/product.controller.js';

const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/product', getProducts);
router.get('/search', searchProductByTitleOrDescription);

export default router;