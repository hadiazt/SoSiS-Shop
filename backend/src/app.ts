import RateLimit from 'express-rate-limit';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { products } from './data/products'
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/v1/product', (req, res) => {
    res.json(products)
});
app.get('/api/v1/product/:id', (req, res) => {
    const Product = products.find((p: { _id: string }) => p._id === req.params.id);
    res.json(Product)
});


app.listen(PORT, () => {
    console.log('Server Is Running On Port ' + PORT);
})