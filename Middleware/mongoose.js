import mongoose from "mongoose";

const connectdb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log("Connected to MongoDB");
  });
  return handler(req, res);
};
export default connectdb;
