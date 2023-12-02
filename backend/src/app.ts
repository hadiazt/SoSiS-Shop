import RateLimit from 'express-rate-limit';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { Routes } from './routes';

const PORT = process.env.PORT;
const app = express();
app.use(cors());
Routes(app)
app.listen(PORT, () => {
    console.log('Server Is Running On Port ' + PORT);
})