const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotevnv = require("dotenv");
const authRoute = require("./routes/auth");

dotevnv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });


app.use(express.json());
app.use("/api/auth", authRoute);


app.listen(8800, ()=> {
    console.log("Backend server is running!");
})