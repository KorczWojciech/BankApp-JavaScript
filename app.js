require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

const register = require("./middleware/register")
const login = require("./middleware/login")
const transfer = require("./middleware/transfer")
// Register
app.post("/register", register);

// Login
app.post("/login", login);

const auth = require("./middleware/auth");

app.post("/transfer", auth, transfer);

module.exports = app;
