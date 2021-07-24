require('dotenv').config()

const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
});

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log("###################################################################")
})