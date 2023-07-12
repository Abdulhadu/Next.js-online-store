import Admin from "../../../Models/admin";
import connectdb from "../../../Middleware/mongoose";


const handler = async (req, res) => {
    if(req.method == 'GET'){
    try
    {
        const adminUser= await Admin.find({});
        return res.status(200).json({adminUser});
    }
    catch(error)
    {
        console.log('error in getting Categories data (backend) => ' + error);
        return res.status(405).json({error : "cannot get categories"});
    }}
    else{
        //return 403 forbidden for non-post requests to this endpoint
    }
}
export default connectdb(handler);