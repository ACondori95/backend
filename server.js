const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/", require("./routes"));

mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
