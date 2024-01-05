const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { StatusCodes } = require('http-status-codes')

const connectDb = require('./db/connect')

const PORT = process.env.PORT

//instance
const app =express()

//body parser
app.use(express.urlencoded({extended:false}))  //query format of data
app.use(express.json())   //json format of data

//middleware
app.use(cors())  //cross origin resource origin
app.use(cookieParser(process.env.ACCESS_SECRET)) 


// api route
app.use(`/api/auth`, require('./router/authRoute'))

//default route
app.use(`*`,(req,res) =>{
<<<<<<< HEAD
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({msg:``})
=======
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({msg:`Requested service path not available`})
>>>>>>> 24ab9d0513d4b1fd2f568c10e2b7dc26e07ef8ea
})
//server Listen
app.listen(PORT,() => {
    connectDb()
    console.log(`server has started and running at http://localhost:${PORT}`)
<<<<<<< HEAD
})
=======
})
>>>>>>> 24ab9d0513d4b1fd2f568c10e2b7dc26e07ef8ea
