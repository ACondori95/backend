const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const {connectDB} = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
