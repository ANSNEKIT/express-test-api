import express, {Request, Response, NextFunction} from 'express';
import { userRouter } from './users/users.js';

const app = express();
const port = 7000;

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Время сейчас ', Date.now());
    next();    
});

app.get('/hello', (req: Request, res: Response) => {
    throw new Error('Ошибка!!!!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(401).send('err.message')    
});

app.listen(port, () => {
    console.log(`Сервер запущен. Прослушиваю порт ${port}`);
});