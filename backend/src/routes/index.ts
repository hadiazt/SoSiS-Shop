module.exports = async (req: any, res: { status: Function, json: Function }) => {
    return res.status(200).json({
        Code: 200,
        Message: 'API Is Running'
    });
}