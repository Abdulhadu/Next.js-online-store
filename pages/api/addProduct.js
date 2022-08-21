import Product from "../../Models/Product";
import connectdb from "../../Middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == 'POST'){
        for(let i=0;i<req.body.length;i++){
let p= new Product({
    title: req.body[i].title,
    Slug: req.body[i].Slug,
    Desc: req.body[i].Desc,
    img: req.body[i].img,
    Category: req.body[i].Category,
    Size: req.body[i].Size,
    Color: req.body[i].Color,
    price: req.body[i].price,
    avaliableQty: req.body[i].avaliableQty
})

await p.save();
    }
    res.status(200).json({ success: "Successs" });
}
    else
    res.status(400).json({ error: "This Method is not Allowed" });
};
export default connectdb(handler);
