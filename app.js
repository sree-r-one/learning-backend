require("dotenv").config();
require("express-async-errors");

const cors = require("cors");
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/api/submit", (req, res) => {
  console.log(req.body);
  res.json({ msg: req.body });
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
