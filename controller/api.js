const { models } = require('mongoose')
const User = require('../models/user')
const axios = require('axios')

const postapi = async(req,res)=>{
    const users =await axios.get('https://jsonplaceholder.typicode.com/posts')
    await User.insertMany(users.data)
    res.send("data stored successfully")
}

module.exports = postapi