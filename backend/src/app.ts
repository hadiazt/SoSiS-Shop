import RateLimit from 'express-rate-limit';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log('Server Is Running On Port ' + PORT);
})