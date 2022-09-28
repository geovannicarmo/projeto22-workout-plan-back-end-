import app from './index'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT||5009

app.listen(5000, ()=>{console.log(`Server run in port ${PORT}.`)})