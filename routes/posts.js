const express = require('express')
const router = express.Router()
const { getPosts, CreatePost, updatePost,deletePost,likePost, getPost } = require('../controllers/posts')
const { authMiddleware } = require('../middleware/auth')

router.get('/',getPosts)
router.get('/:id',authMiddleware,getPost)
router.post('/',authMiddleware, CreatePost)
router.patch('/:id',authMiddleware,updatePost)
router.delete('/:id',authMiddleware,deletePost)
router.patch('/:id/likePost',authMiddleware,likePost)

module.exports = router