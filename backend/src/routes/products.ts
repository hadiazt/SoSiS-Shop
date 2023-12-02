import { Router } from "express";

export const ProductRouter = Router()

ProductRouter.get('/', (req, res: { status: Function, json: Function }) => {
    console.log('a');
})
ProductRouter.get('/:id', (req, res) => {
    console.log('a');
})