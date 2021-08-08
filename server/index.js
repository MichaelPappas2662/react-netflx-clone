const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotevnv = require("dotenv");

dotevnv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });


app.listen(8800, ()=> {
    console.log("Backend server is running!");
})