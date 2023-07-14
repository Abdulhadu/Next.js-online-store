import Admin from "../../../Models/admin";
import connectdb from "../../../Middleware/mongoose";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("request: ", req.body);
    const { username, email, password } = req.body; // destructuring fetching variables from the whole object/array
    let encryptedPassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      "secret key 123"
    ).toString();
    let u = new Admin({ username, email, password: encryptedPassword });

    await u.save();

    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This Method is not Allowed" });
  }
};

export default connectdb(handler);
