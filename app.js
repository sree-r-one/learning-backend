require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Home Page");
});

// routes
app.use("/api/v1/products", productsRouter);

// middleware
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
