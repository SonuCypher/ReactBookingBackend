const express = require('express')
const { signin, signUp } = require('../controllers/user')
const router = express.Router()


router.post('/signin',signin)
router.post('/signup',signUp)



module.exports = router