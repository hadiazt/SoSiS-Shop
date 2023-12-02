export const asyncHandler = (fn: (arg0: any, arg1: any, arg2: any) => any) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}