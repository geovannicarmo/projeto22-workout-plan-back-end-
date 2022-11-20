import express  from 'express';
import cors from 'cors';
import 'express-async-errors';
import router from './routes/indexRoutes';
import dotenv from 'dotenv';
import {errorHandlerMiddleware} from './medleweres/handleErrorsMiddleware';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandlerMiddleware);



export default app;