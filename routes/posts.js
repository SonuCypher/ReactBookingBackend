const express = require('express')
const { getPosts, CreatePost, updatePost,deletePost,likePost } = require('../controllers/posts')
const router = express.Router()

router.get('/',getPosts)
router.post('/',CreatePost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)

module.exports = router