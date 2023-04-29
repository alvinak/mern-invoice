import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config"
import express from "express";
import morgan from "morgan";

import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path:'/Users/amani/Documents/Project/Udemy/April2023/mern-invoice/backend/.env'})
const app = express();


if(process.env.NODE_ENV === 'development'){

    app.use(morgan("dev"))
}


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cookieParser())

app.get("/api/v1/test", (req, res) =>{
    res.json({Hi: "Welcome to the invoice App"})
})

const PORT = process.env.PORT || 1997

app.listen(PORT, ()=>{
    
    console.log( 
        `${chalk.green.bold("✔")} 👍 Server running in ${chalk.yellow.bold(process.env.NODE_ENV)} mode on port ${chalk.blue.bold(process.env.PORT)}`
    )
})

