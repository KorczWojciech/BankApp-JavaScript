const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  account_number: { type: String, unique: true },
  balance: { type: String, default: "100" },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
