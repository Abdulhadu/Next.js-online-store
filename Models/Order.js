// getting-started.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
            productid: { type: string },
            quantity: { type: Number , default: 1}
     }],
    address: { type: string, required: true },
    amount: { type: string, required: true },
    status: { type: string, default: 'pending', required: true },
}, {timestamps: true});
mongoose.models={};
export default mongoose.model("order", OrderSchema );