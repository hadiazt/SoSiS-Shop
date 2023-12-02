import { set, connect } from 'mongoose';

export const DB = async () => {

    set('strictQuery', true);

    await connect(process.env.DBURL).then(() => {
        console.log(`-> 🟢 DB Connected!`);
    }).catch((err: any) => {
        console.log(`-> ❌ DB Not Connected , Err: `, err);
        process.exit(1)
    });
}