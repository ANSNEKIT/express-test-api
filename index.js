import express from 'express';

const app = express();
const port = 7000;

app.get('/hello', (_, res) => {
    res.send('Здорова');
});

app.listen(port, () => {
    console.log(`Сервер запущен. Прослушиваю порт ${port}`);
});