const express = require("express");
const {
  getProduct,
  createProduct,
  updateProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
