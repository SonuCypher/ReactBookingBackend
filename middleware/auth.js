const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        
        if(token){
            const decoded = jwt.verify(token,'SECRET')

            req.userId= decoded?.id
        }
        next()
    } catch (error) {
        console.log(error)
    }
}