import { error } from "console";

export const NotFound = (req: { originalUrl: String }, res: { status: Function }, next: Function) => {
    const error = new Error('Not Found - ' + req.originalUrl);
    res.status(404);
    next(error)
}

export const ErrorHandler = (err: { message: String, name: String, kind: String }, req: any, res: { status: Function, json: Function, statusCode: Number }, next: Function) => {
    let StatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let Message = err.message

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        Message = 'Resource Not Found';
        StatusCode = 404;
    }

    res.status(StatusCode).json({ Code: StatusCode, Message })
}