import { Router } from "express";
import { asyncHandler } from "../middleware/async.module";
import { ProductModel } from "../db/schema/ProductModel";
export const ProductRouter = Router()

ProductRouter.get('/', asyncHandler(async (req, res: { status: Function, json: Function }) => {
    const Products = await ProductModel.find({})
    return res.status(200).json({
        Code: 200,
        Data: Products
    });
}));

ProductRouter.get('/:id', asyncHandler(async (req: { params: { id: String } }, res) => {
    const ID = req.params.id
    const Product = await ProductModel.findById(ID)

    if (!Product) return res.status(404).json({ Code: 404, Message: "Item Not Found" });

    return res.status(200).json({
        Code: 200,
        Data: Product
    });



}));