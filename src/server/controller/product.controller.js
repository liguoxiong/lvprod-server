import Product, { validateProduct } from "../models/product.model";
import mongoose from "mongoose";

const createProduct = async (req, res) => {
  try {
    // validate the request body first
    const { error } = validateProduct(req.body);
    if (error)
      return res.status(400).send({
        success: false,
        message: error.details[0].message
      });

    //find an existing category
    let product = await Product.findOne({ name: req.body.name });
    if (product)
      return res.status(400).send({
        success: false,
        message: "Product already existed."
      });

    product = new Product({
      name: req.body.name,
      description: req.body.description,
      documentation: req.body.documentation,
      origin: req.body.origin,
      model_number: req.body.model_number,
      dilivery_time: req.body.dilivery_time,
      warranty_time: req.body.warranty_time,
      image: req.body.image,
      category: mongoose.Types.ObjectId(req.body.category)
    });
    await product.save();
    res.status(200).send({
      success: true,
      message: "Add new product successfull"
    });
  } catch(err) {
    return res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

const getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).populate('category');
    if (!product)
      return res.status(400).send({
        success: false,
        message: "Product is not existed."
      });
    res.status(200).send({
      success: true,
      data: product
    });
  } catch(err) {
    return res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const limitValue = parseInt(req.query.limit) || 10;
    const skipValue = parseInt(req.query.skip) || 0;
    if (req.query.category) {
      const categoryValue = mongoose.Types.ObjectId(req.query.category);
      let product = await Product.find({category: categoryValue})
      .populate('category');
      return res.status(200).send({
        success: true,
        data: product
      });
    }
    let product = await Product.find()
      .sort("-created_at")
      .limit(limitValue)
      .skip(skipValue)
      .populate('category');
    res.status(200).send({
      success: true,
      data: product
    });
  } catch(err) {
    return res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    if (!product)
      return res.status(400).send({
        success: false,
        message: "Product is not existed."
      });
    res.status(200).send({
      success: true,
      message: "Update product successfull"
    });
  } catch(err) {
    return res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    let product = await Product.findByIdAndRemove(req.params.id);
    if (!product)
      return res.status(400).send({
        success: false,
        message: "Product is not existed."
      });
    res.status(200).send({
      success: true,
      message: "Delete product successfull"
    });
  } catch(err) {
    return res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

export default {
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getAllProduct
};
