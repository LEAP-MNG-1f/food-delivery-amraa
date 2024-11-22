import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/";

const connectDb = async () => {
  const client = new MongoClient(connectionString);

  let connection;

  try {
    connection = await client.connect();
  } catch (error) {
    console.log("failed to connect db");
  }

  const db = connection.db("sample_mflix");
  return db;
};

export default connectDb;
