import express from 'express';
import { userRouter } from './users/users.js';

const app = express();
const port = 7000;

app.get('/hello', (_, res) => {
    res.send('Здорова');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Сервер запущен. Прослушиваю порт ${port}`);
});