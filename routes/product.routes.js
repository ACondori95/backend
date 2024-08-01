const express = require("express");
const {
  getProduct,
  createProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);

module.exports = router;
