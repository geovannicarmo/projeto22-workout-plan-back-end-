import express  from "express";
import cors from 'cors'
import "express-async-errors";
import {errorHandlerMiddleware} from '../src/medleweres/handleErrorsMiddleware'
import router from "./routes/indexRoutes";

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)


app.use(errorHandlerMiddleware);
export default app