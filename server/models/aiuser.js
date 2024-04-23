const mongoose = require("mongoose");

const aiuserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const aiuserModel = mongoose.model("aiusersss", aiuserSchema);
module.exports = aiuserModel;
