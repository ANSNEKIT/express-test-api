import express from 'express';
import { userRouter } from './users/users.js';
const app = express();
const port = 7000;
app.use((req, res, next) => {
    console.log('Время сейчас ', Date.now());
    next();
});
app.use('/users', userRouter);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(401).send('err.message');
});
app.listen(port, () => {
    console.log(`Сервер запущен. Прослушиваю порт ${port}`);
});
