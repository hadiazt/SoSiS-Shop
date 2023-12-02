import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { Routes } from './routes/routes';
import RateLimit from 'express-rate-limit';
import { NotFound, ErrorHandler } from './middleware/error.module';


const PORT = process.env.PORT;
const app = express();

app.use(cors());

// app.use(RateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100 // limit each IP to 100 requests per windowMs
// }));

Routes(app);

app.use(NotFound);
app.use(ErrorHandler);
app.listen(PORT, () => {
    console.log('Server Is Running On Port ' + PORT);
});