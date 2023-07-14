import Product from "../../../Models/Product.js";
import connectdb from "../../../Middleware/mongoose.js";

export default async (req, res) => {
    await connectdb();
     switch (req.method) {
        case "POST":
            await addProduct(req, res)
            break;
        case "GET":
            await getProduct(req, res)
            break;
        case "PUT":
            await updateProduct(req, res)
            break;
        case "DELETE":
            await deleteProduct(req, res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

// adding product

const addProduct = async (req, res) => {
   
    try {
        // Assuming the request body is an array of products
    
        const { title, Slug, Category, Size, Color, price, img, Desc, avaliableQty } = req.body;

    
        // Create a new instance of the Category model
        const product = new Product({
          title,
          Slug,
          Desc,
          img,
          Category,
          Size,
          Color,
          price,
          avaliableQty
        });
          console.log("Our Record: ", product);
          await product.save();
    

        return res.status(201).json({ msg: 'Category added successfully' });
      } catch (error) {
        console.log('error adding category', error.message);
        return res.status(500).json({ error: "something went wrong" });
      }
}

// deleting product
const deleteProduct = async (req, res) => {
    try {
        const id = req.query.id;
        // console.log(id);
        await Product.findByIdAndDelete(id);
        return res.status(201).json({ msg: "Product Deleted Successfully" });
    } catch (error) {
        console.log('error in deleting product(server) => ' + error);
        return res.status(405).json({ error: "can't delete product, Retry!" });
    }
};


// get Product
const getProduct = async (req, res) => {

    try {
        const data = await Product.find();
        return res.status(201).send(data);
    }
    catch (error) {
        console.log('error in getting product (server) => ' + error);
        return res.status(405).json({ error: "can't get data , Retry !" });
    }
}

// update Product
const updateProduct = async (req, res) => {
    const data = req.body;
    const id = data._id;
    try {
        await Product.findByIdAndUpdate(id, data)
        return res.status(200).json({ msg: 'Product updated successfully' })

    }
    catch (error) {
        console.log('error in getting product data by id (server) => ' + error)
        return res.status(408).json({ error: 'cannot update product data' })
    }
}


