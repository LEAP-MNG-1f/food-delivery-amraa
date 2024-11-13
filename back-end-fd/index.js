import express from "express";
import cors from "cors";

const server = express();
const PORT = 8888;

server.use(cors());

server.get("/", (req, res) => {
  res.send(["amraa", "sengee"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running`);
});
