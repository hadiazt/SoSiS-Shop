import { DB } from '../db/connector';
import { ProductRouter } from './products';
const BaseURL = process.env.BaseURL;

export const Routes = (app: { get: Function, use: Function }) => {
    DB()
    
    app.get(BaseURL + '/', require('./get/index'));

    app.use(BaseURL + '/product', ProductRouter);


    // console.log(BaseURL);

    // app.get(BaseURL + '/product', require('./get/products'));

    // app.get('/api/v1/product/:id', (req: any, res: any) => {
    //     // const Product = products.find((p: { _id: string }) => p._id === req.params.id);
    //     res.json(products)
    // });
}