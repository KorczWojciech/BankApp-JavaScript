require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

const register = require("./middleware/register");
const login = require("./middleware/login");
const transfer = require("./middleware/transfer");
const history = require("./middleware/history");
const auth = require("./middleware/auth");

// Register
app.post("/register", register);
//Przykładowa zawartość body:
// {
//     "first_name": "Jan8",
//     "last_name": "Nowak8",
//     "email": "test8@mail.com",
//     "password": "qwerty"
// }

// Login
app.post("/login", login);
//Przykładowa zawartość body:
// {
//     "email": "test10@mail.com",
//     "password": "qwerty"
// }

//transfer - przelew
app.post("/transfer", auth, transfer);
//Przykładowa zawartość body:
// {
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5YjY3NDNjYzY4Mzc4YzI2YjVkOTI1IiwiZW1haWwiOiJ0ZXN0MTBAbWFpbC5jb20iLCJpYXQiOjE2NzEzMDM0MTgsImV4cCI6MTY3MTMxMDYxOH0.cX37antOQlfhPE0zzDIVL6suYcv1COcqd6OT1b1Lt3Y",
//     "receiver":"10324773476478460395256871",
//     "amount":100,
//     "title":"Przelew za zakupy"
// }

//history - historia transakcji
app.get("/history", auth, history);
//Przykładowa zawartość body:
// {
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5Yjc1ZTNlMGQxYTY3Yzc2MjAzNjEyIiwiZW1haWwiOiJ0ZXN0M0BtYWlsLmNvbSIsImlhdCI6MTY3MTMwMTIxNywiZXhwIjoxNjcxMzA4NDE3fQ.tdsgR12-GQHuak9EXQC6jhbHo4wIXo_DxoJPN1G87IY"
// }
module.exports = app;
