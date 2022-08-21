import User from "../../Models/User";
import connectdb from "../../Middleware/mongoose";
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    const { firstname, lastname, email } = req.body //destructuring fetching variables from whole object/array
    let u = new User({ firstname, lastname, email, password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'secret key 123').toString() });

    await u.save();

    res.status(200).json({ success: "Successs" });
  } else { res.status(400).json({ error: "This Method is not Allowed" }) }
};
export default connectdb(handler);
