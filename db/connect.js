const mongoose = require('mongoose')

const connectDb = async() => {
    const url = process.env.MODE === "devolopment" ? process.env.MONGO_DEV : process.env.MONGO_URL
    
    return mongoose.connect(url)
    .then(res => {
        console.log(`mongoDB connected`)
    }).catch(err => console.log(err.message))
}

module.exports = connectDb