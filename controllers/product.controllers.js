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

exports.createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({success: false, message: "Please provide all fields"});
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
  } catch (error) {
    console.error("Error in create product:", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
};
