const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const aiuserModel = require("./models/aiuser");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/aiuser");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  aiuserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/signup", (req, res) => {
  aiuserModel
    .create(req.body)
    .then((aiusersss) => res.json(aiusersss))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running..........");
});
