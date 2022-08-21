import Product from "../../Models/Product";

import connectdb from "../../Middleware/mongoose";

const handler = async (req, res) => {
  let products = await Product.find();
  let tshirt = {}
  for (let item of products) {
    if (item.title in tshirt) {
      if (!tshirt[item.title].Color.includes(item.Color) && item.avaliableQty > 0) {
        tshirt[item.title].Color.push(item.Color);
      }
      if (!tshirt[item.title].Size.includes(item.Size) && item.avaliableQty > 0 ) {
        tshirt[item.title].Size.push(item.Size);
      }
    } else {
      tshirt[item.title] = JSON.parse(JSON.stringify(item));
      if (item.avaliableQty > 0) {
        tshirt[item.title].Color = [item.Color];
        tshirt[item.title].Size = [item.Size];
      }
    }
  }
  res.status(200).json({tshirt});
};
export default connectdb(handler);
