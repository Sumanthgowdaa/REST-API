const fileRoute = require('express').Router()
const {uploadFile, readFile, readSingleFile, deleteFile,allFiles,filterType} = require('../controller/fileController')
const auth = require('../middleware/auth')
const fileType = require('../util/fileExt')

fileRoute.post(`/upload` , auth,uploadFile)

fileRoute.get(`/all`,auth, readFile)

fileRoute.get(`/single/:id`,auth, readSingleFile)

fileRoute.delete(`/delete/:id`,auth,deleteFile)

//open routes
fileRoute.get(`/open`,auth,allFiles)

fileRoute.get(`/filter`,filterType)

module.exports = fileRoute