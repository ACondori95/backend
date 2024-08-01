import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {connectDB} from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
