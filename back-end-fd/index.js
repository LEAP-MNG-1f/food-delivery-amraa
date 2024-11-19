import express from "express";
import cors from "cors";
// Use ES Module syntax to import cloudinary
import { v2 as cloudinary } from "cloudinary";

const server = express();
const PORT = 8888;

// Configure Cloudinary
cloudinary.config({
  cloud_name: "df1bobxmm",
  secure: true,
});

const url = cloudinary.url("20241119_100045_mq67u9");

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

console.log(url);

server.use(cors());

server.get("/", (req, res) => {
  res.send(["amraa", "sengee"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running`);
});
