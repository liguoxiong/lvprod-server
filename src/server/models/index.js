import mongoose from "mongoose";
import User from "./user.model";
import Message from "./message.model";
const connectDb = () => {
  return mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true });
};
const models = { User, Message };
export { connectDb };
export default models;
