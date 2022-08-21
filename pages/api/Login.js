import User from "../../Models/User";
import connectdb from "../../Middleware/mongoose";
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    console.log(req.body.email);
    let user = await User.findOne({ "email": req.body.email });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, 'secret key 123');
      let decryptedpass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (req.body.email == user.email && req.body.password == decryptedpass) {
        var token = jwt.sign({ email: user.email, firstname: user.firstname, lastname: user.lastname }, 'secretkey', {
          expiresIn: '2h'	// expires in 365 days
        });
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({ success: false, error: "Please Enter Valid Credentials" });
      }
    }
    else {
      res.status(200).json({ success: false, error: "User are not register yet First Signup " });
    }

  }
};
export default connectdb(handler);
