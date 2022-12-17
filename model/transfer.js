const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema({
  sender: { type: String },
  receiver: { type: String },
  amount: { type: String },
  title: { type: String },
});

module.exports = mongoose.model("transfer", transferSchema);
