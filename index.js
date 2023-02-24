const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/main_route");
const app = express();


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/fresh").then(() => {
  console.log("mongodb connect");
});
app.use('/',router)


app.listen(3000, () => {
  console.log("this is listening on 8000");

})
