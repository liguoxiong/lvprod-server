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
  } catch {
    return res.status(500).send({
      success: false,
      message: "Server error!"
    });
  }
};

export default {
  createProduct
};
