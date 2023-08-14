const express = require("express");
const app = express();
const PORT = 5000;
const { people } = require("./data");

const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.use(express.json());

app.get("/", logger, (req, res) => {
  res.send("home");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, person: name, data: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(PORT, () => {
  console.log(`SERVER is listening on PORT ${PORT}`);
});
