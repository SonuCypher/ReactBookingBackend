const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Users } = require('../models/users')

module.exports.signin = async (req,res)=>{
    const {email,password} = req.body

    try {
        const validUser = await Users.findOne({ email })
        if(validUser){
            const validPassword = await bcrypt.compare(password,validUser.password)
            if(validPassword){
                const token = jwt.sign({email: validUser.email, id: validUser._id},'SECRET',{ expiresIn:"1h"})
               return res.status(200).json({result:validUser, token})
            }else{
                return res.status(404).json({message:"invalid password or username"})
            }
        }else{
           return res.status(404).json({message:"invalid password or username"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}
module.exports.signUp = async (req,res)=>{
const { email, password,firstName,lastName}=req.body
try {
    const existingUser = await Users.findOne({ email })
    if(existingUser) return res.status(400).json({message:"user already exist"})

    const hashedPassword = await bcrypt.hash(password,12)

    const result = new Users({email,password:hashedPassword,name:`${firstName} ${lastName}`})
    await result.save()

    const token = jwt.sign({email: result.email, id: result._id},'SECRET',{ expiresIn:"1h"})
    res.status(200).json({ result,token})
} catch (error) {
    res.status(500).json({error})
}
}