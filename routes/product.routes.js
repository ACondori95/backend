const express = require("express");
const {getProduct} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getProduct);

module.exports = router;
