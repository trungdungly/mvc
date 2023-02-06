const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/result", (req, res) => {
  res.render("result", {
    name: req.body.name,
    age: req.body.age,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
