const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const express = require("express");
const cors = require("cors");
const router = express.Router();
const connectdb = require("./db");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
// const bcrypt = require("bcrypt");
connectdb();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user", require("./routes/userRoute"));

const port = 5000;
app.listen(port, () => {
  console.log(`server started at :${port}`);
});
