import { Router } from "express";

export const ProductRouter = Router()

ProductRouter.get('/', (req, res) => {
    console.log('a');
})