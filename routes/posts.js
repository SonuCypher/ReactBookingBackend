const express = require('express')
const { getPosts, CreatePost, updatePost } = require('../controllers/posts')
const router = express.Router()

router.get('/',getPosts)
router.post('/',CreatePost)
router.patch('/:id',updatePost)

module.exports = router