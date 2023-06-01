const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile: String,
    likecount: {
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default:new Date()
    },
})

module.exports.PostSites = mongoose.model('PostSites', postSchema)