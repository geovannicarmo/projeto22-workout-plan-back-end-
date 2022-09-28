import express  from "express";
import cors from 'cors'
import "express-async-errors";
import {errorHandlerMiddleware} from '../src/medleweres/handleErrorsMiddleware'

import { notFoundError } from "./utils/errorUtils";

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) =>{

    throw notFoundError("deu ruin")
   
    return res.send("ta lá")
})

app.use(errorHandlerMiddleware);
export default app