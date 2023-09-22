const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;
const todoRouter = require("./routes/todoRoute");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "Code Bless You", Subscribe: true });
});

app.use("/todoApp", todoRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
