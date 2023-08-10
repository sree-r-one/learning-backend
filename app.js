const express = require("express");
const app = express();
const { status, products } = require("./data");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/v1/status'>Status</a>");
});

app.get("/api/v1/", (req, res) => {
  res.json(products);
});

// general path
app.get("/api/v1/status", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, title, price } = product;
    return { id, title, price };
  });
  res.json(newProducts);
});

// route parameters
app.get("/api/v1/status/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  // Error handling
  if (!singleProduct) {
    res.status(404).send("Product Does Not Exist");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  console.log(search);
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.title.startsWith(search);
    });
  }

  // console.log(sortedProducts);
  res.status(200).json(sortedProducts);
  // res.send("hello");
});

app.listen(PORT, () => {
  console.log(`SERVER is listening on PORT ${PORT}`);
});
