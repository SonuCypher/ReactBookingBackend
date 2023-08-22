const express = require('express')
const router = express.Router()
const { getPosts, CreatePost, updatePost,deletePost,likePost } = require('../controllers/posts')
const { authMiddleware } = require('../middleware/auth')

router.get('/',getPosts)
router.post('/',authMiddleware, CreatePost)
router.patch('/:id',authMiddleware,updatePost)
router.delete('/:id',authMiddleware,deletePost)
router.patch('/:id/likePost',authMiddleware,likePost)

module.exports = router