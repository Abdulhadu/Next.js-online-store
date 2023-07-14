import User from "../../Models/User";
import connectdb from "../../Middleware/mongoose";
import { encrypt } from "crypto-js/aes"; // Import only the required function from 'crypto-js/aes'

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { firstname, lastname, email, password } = req.body; // Destructuring fetching variables from the whole object/array
    const encryptedPassword = encrypt(JSON.stringify(password), "secret key 123").toString();
    const u = new User({ firstname, lastname, email, password: encryptedPassword });

    await u.save();

    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This Method is not Allowed" });
  }
};

export default connectdb(handler);
