import { ProductModel } from "../db/schema/ProductModel";
import { asyncHandler } from "../middleware/async.module";


export const GetProducts = asyncHandler(async (req, res: { status: Function, json: Function }) => {
    const Products = await ProductModel.find({})
    return res.status(200).json({
        Code: 200,
        Data: Products
    });
})

export const GetProductByID = asyncHandler(async(req: { params: { id: String } }, res:any) => {
    const ID = req.params.id
    const Product = await ProductModel.findById(ID)

    if (!Product) {
        res.status(404); throw new Error("Item Not Found")
    } else {
        return res.status(200).json({
            Code: 200,
            Data: Product
        });
    }
})