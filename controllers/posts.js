const { PostSites } = require("../models/postSites");

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await PostSites.find({});

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.CreatePost = async (req, res) => {
  const post = req.body;
  const newPost = new PostSites(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;

    const updatedPost = await PostSites.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await PostSites.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.likePost = async(req,res)=>{
   try{ const {id} = req.params

    const post = await PostSites.findById(id)
    if(post){
        const updatedPost = await PostSites.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new: true})
        res.json(updatedPost)
    }else{
        res.json({message: "No such post"})
    }}catch(err){
        res.status(409).json({ message: err.message })
    }

}