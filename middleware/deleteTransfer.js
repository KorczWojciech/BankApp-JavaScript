const User = require("../model/user");
const { now } = require("mongoose");
const Transfer = require("../model/transfer");

module.exports = async function deleteTransfer(req, res) {
  const { id } = req.body;
  if (!id) {
    res.status(400).send("All input is required");
  } else {
    const transfer = await Transfer.findByIdAndDelete(id);
    if (!transfer) {
      res.status(400).send("Transfer don't exist!");
    } else {
      res.status(200).json("Succesful deleted");
    }
  }
};
