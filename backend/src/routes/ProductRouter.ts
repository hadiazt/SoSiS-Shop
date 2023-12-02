import { Router } from "express";
import { GetProducts, GetProductByID } from "../controller/ProductsController";
export const ProductRouter = Router()

ProductRouter.route('/').get(GetProducts)
ProductRouter.route('/:id').get(GetProductByID)