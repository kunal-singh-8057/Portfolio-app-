require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = require("../server/app");
const connectDB = require("../server/Utils/db");
const bodyParser = require("body-parser");
const router = require("../server/Routes/userRoutes");

app.use(cors({
    origin:["https://portfolio-app-ecru-pi.vercel.app"],
    credentials:true
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(router);

connectDB();

app.listen(`${PORT}`,()=>{
    console.log(`The server is running at : http://localhost:${PORT}`)
})