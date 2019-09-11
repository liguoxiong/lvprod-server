import dotEnv from "dotenv";
import mongoDb from "mongodb";
dotEnv.config();
const connectDb = () => {
  const MongoClient = mongoDb.MongoClient;
  const uri = process.env.MONGOLAB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  return client.connect(err => {
    if (err) {
      console.log("mongo connect err", err);
    }
    //   const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
};
export default connectDb;
