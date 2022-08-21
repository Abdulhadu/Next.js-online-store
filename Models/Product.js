const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    Slug: { type: String, required: true , unique: true },
    Desc: { type: String, required: true },
    img: { type: String, required: true },
    Category: { type: String, required: true },
    Size: { type: String},
    Color: { type: String},
    price: { type: Number, required: true },
    avaliableQty: { type: Number, required: true },
}, {timestamps: true});
mongoose.models={};
export default mongoose.model("Product", ProductSchema );