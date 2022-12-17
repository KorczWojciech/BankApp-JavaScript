require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Logic goes here
// importing user context
const User = require("./model/user");
const Transfer = require("./model/transfer");

// Register
app.post("/register", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    } else {
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
      let account_number = makeAccNum();
      const oldAccNum = await User.findOne({ account_number });
      if (oldAccNum) {
        do {
          account_number = makeAccNum();
        } while (oldAccNum);
      }
      const balance = "100";
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
      const id = account_number;
      // Create user in our database
      const user = await User.create({
        id,
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        balance,
        account_number,
      });

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          // expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      // return new user
      res.status(201).json(user);
    }
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    } else {
      // Validate if user exist in our database
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        // save user token
        user.token = token;

        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }

  // Our register logic ends here
});

const auth = require("./middleware/auth");

app.get("/welcome", auth, async (req, res) => {
  const currentUser = await User.findById(req.user.user_id);
  let numb = Number(currentUser.balance) * 2;
  // let up = await User.findByIdAndUpdate(req.user.user_id, {
  //   balance: numb.toString(),
  // });
  res.status(200).send(numb.toString());
});

app.post("/transfer", auth, async (req, res) => {
  const { receiver, amount, title } = req.body;
  if (!(receiver && amount && title)) {
    res.status(400).send("All input is required");
  } else {
    const userReceiver = await User.findOne({ id: req.body.receiver });
    if (!userReceiver) {
      res.status(400).send("The receiver don't exist!");
    } else {
      const receiverAccountNumber = userReceiver.account_number;
      let receiverBalance = Number(userReceiver.balance);

      const currentUser = await User.findById(req.user.user_id);
      const senderAccountNumber = currentUser.account_number;
      let senderBalance = Number(currentUser.balance);
      if (senderBalance - amount < 0) {
        res.status(409).send("Not enough money.");
      } else {
        const transfer = await Transfer.create({
          sender: senderAccountNumber,
          receiver: receiverAccountNumber,
          amount,
          title,
        });

        receiverBalance = receiverBalance + amount;
        senderBalance = senderBalance - amount;

        await User.findOneAndUpdate(
          { id: req.body.receiver },
          {
            balance: receiverBalance.toString(),
          }
        );
        await User.findByIdAndUpdate(req.user.user_id, {
          balance: senderBalance.toString(),
        });

        // let up = await User.findByIdAndUpdate(req.user.user_id, {
        //   balance: numb.toString(),
        // });
        res.status(200).send(receiverBalance.toString());
      }
    }
  }
});

function makeAccNum() {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 26; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = app;
