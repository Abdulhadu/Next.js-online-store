import Order from "../../../Models/Order";
import connectdb from "../../../Middleware/mongoose.js";

export default async (req, res) => {
    await connectdb();
     switch (req.method) {
        case "GET":
            await getOrder(req, res)
            break;
         default:
                return res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    }

const getOrder= async (req, res) => {

        try {
            const data = await Order.find();
            return res.status(201).send(data);
        }
        catch (error) {
            console.log('error in getting product (server) => ' + error);
            return res.status(405).json({ error: "can't get data , Retry !" });
        }
}