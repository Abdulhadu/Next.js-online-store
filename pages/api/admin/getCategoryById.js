import connectdb from "../../../Middleware/mongoose";
import Category from "../../../Models/category";


export default async (req , res) => 
{
    await connectdb();

    const {id} = req.query;
    try
    {
        const data = await Category.findById({_id : id});
        return res.status(201).send(data);
    }
    catch(error)
    {
        console.log('error in getting category data by id (server) => ' + server)
        return res.status(408).json({error : 'cannot get category data'})
    }
    
}