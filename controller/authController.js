const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')
const comparePassword = require('../util/password')


const authController = {
    register : async (req , res) => {
        try {
            const { name, email, mobile, password } = req.body;

            //email
            const extEmail = await User.findOne({email})
            const extMobile = await User.findOne({mobile})

            // point duplicates, any server response error 409
            if(extEmail)
                return res.status(StatusCodes.CONFLICT).json({msg: `${email} already exists`})
            
            if(extMobile)
                return res.status(StatusCodes.CONFLICT).json({msg: `${email} already exists`})


            const encPass = await bcrypt.hash(password,10)

            let data = await User.create({
                name,
                email,
                mobile,
                password: encPass
            })

            res.status(StatusCodes.ACCEPTED).json({msg: "new user registered success", user: data })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg : err.message})    
        }
        

    },
    login : async (req , res) => {
        try {
            const {email,mobile,password} = req.body
            
            //if login through email
            if(email){
                let extEmail = await User.findOne( {email})
                if(!extEmail)
                return res.status(StatusCodes.CONFLICT).json({msg:`${email} is not registered`})

                //compare the password(string,hash)
                let isMatch = await comparePassword(password,extEmail.password)
                if(!isMatch)
                return res.status(StatusCodes.UNAUTHORIZED).json({msg:`password not matched`})
            }
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg : err.message})    
        }
        

    },
    logout : async (req, res) => {
        try {
            res.json({msg : logout})
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg : err.message})    
        }
        

    },
    authToken : async (req, res) => {
        try {
            res.json({msg : authToken})
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg : err.message})    
        }
        

    },
    currentUser  : async (req, res) => {
        try {
            res.json({msg : currentUser})
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg : err.message})    
        }
        

    }
}

module.exports = authController
