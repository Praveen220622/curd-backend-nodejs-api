import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import route from "./Routes/userRoute.js"
const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 7000

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("DB connected successfully")
}).catch(error => console.log(error))
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})

app.use("/api", route)