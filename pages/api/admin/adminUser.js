import connectdb from "../../../Middleware/mongoose";
import Admin from "../../../Models/admin";


export default async (req, res) => {
    await connectdb();
    switch (req.method) {
        case "GET":
            await getAdmin(req , res)
            break;
        case "PUT":
            await updateAdmin(req , res)
            break;
        case "DELETE":
            await  deleteAdmin(req , res)
            break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

// deleting  Admin
const deleteAdmin = async (req, res) => {
    const { id } = req.query;
    try {
        await Admin.findByIdAndDelete(id);
        return res.status(200).json({ msg: "Admin deleted successfully" });
    }
    catch (error) {
        console.log('error in deleting Admin data (backend) => ' + error);
        return res.status(405).json({ error: "cannot delete Admin" });
    }
}

// updating Admin
const updateAdmin = async (req, res) => {
    const data = req.body;
    const id = data._id;
    try
    {
        await Admin.findByIdAndUpdate(id , data)
        return res.status(200).json({msg : 'Admin updated successfully'})
        
    }
    catch(error)
    {
        console.log('error in getting Admin data by id (server) => ' + error)
        return res.status(408).json({error : 'cannot update Admin data'})
    }
}


// getting Admin
const getAdmin = async (req, res) => {
    try
    {
        const adminUser = await Admin.find({});
        return res.status(200).json({adminUser});
    }
    catch(error)
    {
        console.log('error in getting Admin user (backend) => ' + error);
        return res.status(405).json({error : "cannot get Admin"});
    }
}