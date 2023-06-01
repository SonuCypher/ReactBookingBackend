const { PostSites } = require("../models/postSites")

module.exports.getPosts = async(req,res)=>{
    try {
        const posts = await PostSites.find({})

       res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
    
}

module.exports.CreatePost = async(req,res)=>{
    const post = req.body
    const newPost = await PostSites(post)
    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}