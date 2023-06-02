const express = require('express')
const { getPosts, CreatePost } = require('../controllers/posts')
const router = express.Router()

router.get('/',getPosts)
router.post('/',CreatePost)

module.exports = router