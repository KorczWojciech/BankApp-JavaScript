const User = require("../model/user");
const Transfer = require("../model/transfer");

module.exports = async function history(req, res){
    const currentUser = await User.findById(req.user.user_id);
    const currentAccountNumber = currentUser.account_number;
    const transfersAsReceiver = await Transfer.find({"receiver":currentAccountNumber});
    const transfersAsSender = await Transfer.find({"sender":currentAccountNumber});
    const allTransfers = transfersAsSender.concat(transfersAsReceiver);
    const sorted = allTransfers.sort((a,b)=>{
        if(a.date>b.date) return -1;
    })
    res.status(200).send(sorted);
}