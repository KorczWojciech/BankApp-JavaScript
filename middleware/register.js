const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = async function register(req,res) {
    // Our register logic ends here
    try {
        // Get user input
        const {first_name, last_name, email, password} = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        } else {
            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await User.findOne({email});

            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login");
            }
            let account_number = makeAccNum();
            const oldAccNum = await User.findOne({account_number});
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
                {user_id: user._id, email},
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
}

function makeAccNum() {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 26; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}