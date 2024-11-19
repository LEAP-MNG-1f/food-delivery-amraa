import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

const server = express();

server.use(cors());
server.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

server.get("/", (req, res) => {
  res.send("sainuu delhii");
});

server.post("/image-upload", async (req, res) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      "./assets/friends.jpg"
    );
    console.log(uploadResult);
    res.json(uploadResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
