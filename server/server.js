import express from "express";
import fetchApi from "./api.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
  const { search } = req.query;
  const data = await fetchApi(search);
  res.json(data);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
