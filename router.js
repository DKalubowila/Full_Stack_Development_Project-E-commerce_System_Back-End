const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Correct function name
router.get("/products", controller.getProducts);
router.post("/createproducts", controller.addProducts);
router.post("/updateproducts", controller.updateProducts);
router.post("/deleteproducts", controller.deleteProducts);

module.exports = router;
