import mongoose from 'mongoose';
import 'dotenv/config';
import { users } from './data/users';
import { products } from './data/products';
import { UsersModel } from './db/schema/UserModel';
import { OrderModel } from './db/schema/OrderModel';
import { ProductModel } from './db/schema/ProductModel';
import { DB } from './db/connector';

DB();

const importData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UsersModel.deleteMany();

    const createdUsers = await UsersModel.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await ProductModel.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UsersModel.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}