const mongoose = require("mongoose");
const Product = require("../models/product.model");

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({success: true, data: products});
  } catch (error) {
    res.status(500).json({success: false, message: "Server Error"});
  }
};
