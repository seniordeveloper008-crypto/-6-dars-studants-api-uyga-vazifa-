import express from "express"
import { config } from "dotenv"
import { router } from "./routes/students.routes.js"
config()

const port = process.env.PORT||3001
const app = express()
app.use(express.json())
app.use('/students',router)

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`);
})