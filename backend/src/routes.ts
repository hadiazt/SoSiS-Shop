import { products } from './data/products'
export const Routes = (app: { get: Function }) => {
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
}