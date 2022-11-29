import express, { Application } from 'express';
import dotenv from 'dotenv';
import apiRoute from './routes/api';
import bodyParser from 'body-parser';
import cors from 'cors';
import catchErrorMiddleware from './middleware/errorHandler';

const corsOptions = { credentials: true, origin: true };
dotenv.config();
const app: Application = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(catchErrorMiddleware);
app.use('/api', apiRoute);

const server = app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default server;
