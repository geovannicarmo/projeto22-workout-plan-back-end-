import express  from "express";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) =>{

    console.log("___")
    return res.send("ta lá")
})


export default app