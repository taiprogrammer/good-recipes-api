import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

function getClient() {
  const uri = `mongodb+srv://${process.env.M_USER}:${process.env.M_PASSWORD}@cluster0.l0ggbf7.mongodb.net/?retryWrites=true&w=majority`;
  return new mongodb.MongoClient(uri);
}

export { getClient };
