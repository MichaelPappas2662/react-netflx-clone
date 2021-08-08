const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


app.listen(8800, ()=> {
    console.log("Backend server is running!");
})