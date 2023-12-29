const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { StatusCodes } = require('http-status-codes')
const PORT = process.env.PORT

//instance
const app =express()

//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//middleware
app.use(cors())
app.use(cookieParser())


//default route
app.use(`**`,(req,res) =>{
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({msg:`Requested service path not available`})
})
//server Listen
app.listen(PORT,() => {
    console.log(`sever has started and running at http://localhost:${PORT}`)
})