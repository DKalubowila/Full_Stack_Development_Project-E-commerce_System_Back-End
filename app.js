const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/products", (req, res) => {
  controller.getProducts((req, res, next) => {
    res.send();
  });
});

app.post("/createproducts", (req, res) => {
  controller.addProducts(req.body, (callack) => {
    res.send();
  });
});

app.post("/deleteproducts", (req, res) => {
  controller.deleteProducts(req.body, (callack) => {
    res.send(callack);
  });
});

app.post("/updateproducts", (req, res) => {
  controller.updateProducts(req.body, (callack) => {
    res.send(callack);
  });
});

module.exports = app;
