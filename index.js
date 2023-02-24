const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const { default: axios } = require('axios');
const { log } = require("console");
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/fresh").then(() => {
  console.log("mongodb connect");
});

app.post('/',async(req,res)=>{
    const users =await axios.get('https://jsonplaceholder.typicode.com/posts')
    await User.insertMany(users.data)
    res.send("data stored successfully")

})


app.listen(3000, () => {
  console.log("this is listening on 8000");

})
