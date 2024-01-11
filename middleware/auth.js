// decrypt the user id from auth token recieved by headers authorisation

const {StatusCodes} = require("http-status-codes")
const jwt = require('jsonwebtoken')
const auth = async(req,res,next) => {
    try{
        //read the token from headers auth 2.0
        let token= req.header('Authorization')
        if(!token)
        return res.status(StatusCodes.NOT_FOUND).json({msg:`token not found`})
        
        //verifying token
            jwt.verify(token,process.env.ACCESS_SECRET,(err,data) => {
            if(err)
            return res.status(StatusCodes.UNAUTHORIZED).json({msg:`Unauthorized Token,login again`})
            req.userId = data.id
            next()
            // res.json({data}) // if token is verified:id is generated
        })
    }catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err})
    }
}

module.exports = auth