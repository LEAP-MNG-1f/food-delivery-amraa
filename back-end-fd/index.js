import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";
import bodyParser from "body-parser";
import { ObjectId } from "mongodb";

dotenv.config();

const server = express();
const PORT = 4000;

server.use(cors());
server.use(bodyParser.json());

server.get("/", async (req, response) => {
  const db = await connectDb();

  let collection = db.collection("movies");
  let results = await collection.find().limit(10).toArray();

  response.json({
    succes: true,
    data: results,
  });
});

server.post("/product", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.insertMany([
    {
      name: "puujin",
      owner: "enkh-amir",
      price: "10000000099",
    },
  ]);

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.deleteOne({
    _id: new ObjectId("674001f7ce5d79b129e49a2e"),
  });

  response.json({
    succes: true,
    data: result,
  });
});

server.put("/update-product", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.updateOne(
    {
      _id: new ObjectId("674001f7ce5d79b129e49a2e"),
    },
    {
      $set: { owner: "enkh-amir", price: "8800", date: new Date() },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
