const User = require("../model/user");
const Transfer = require("../model/transfer");

module.exports = async function transfer(req,res) {
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
                res.status(200).send(receiverBalance.toString());
            }
        }
    }
}