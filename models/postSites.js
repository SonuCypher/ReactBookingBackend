const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    name:{type:String,required:true},
    creator:{type:String,required:true},
    tags:[String],
    selectedFile: {type:String,required:true},
    likes: {
        type:[String],
        default:[]
    },
    createdAt: {
        type:Date,
        default:new Date()
    },
})

module.exports.PostSites = mongoose.model('PostSites', postSchema)