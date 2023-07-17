const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/posts')

const app = express()


mongoose.connect("mongodb://localhost:27017/reactStill")
.then(()=>{console.log('database connected')})
.catch((err)=>{console.log(err.message)})

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.use('/posts',postRoutes)


app.listen(5000,()=>{
    console.log('listening on port 5000')
})