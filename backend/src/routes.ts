import { products } from './data/products';
import { DB } from './db/connector';

export const Routes = (app: { get: Function }) => {
    DB()
    app.get('/api/v1', (req: any, res: any) => {
        res.send('Hello World!');
    });
    app.get('/api/v1/product', (req: any, res: any) => {
        res.json(products)
    });
    app.get('/api/v1/product/:id', (req: any, res: any) => {
        // const Product = products.find((p: { _id: string }) => p._id === req.params.id);
        res.json(products)
    });
}