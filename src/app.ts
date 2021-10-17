import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send({ some: 'json' });
});

app.get('/health', async (req: Request, res: Response) => {
    res.send(JSON.stringify({
        status: 'ok',
        code: 320,
        message: 'server is running'
    }));
});

app.get('/ping', async (req: Request, res: Response) => {
    res.send(JSON.stringify({
        status: 'ok',
        code: 200,
        message: 'server is running'
    }));
});

export {
    app
};