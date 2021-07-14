import mongoose from "mongoose";
import productData from "../data/products.js";
import Product from "../model/product.js";

export const importProductData = async (req, res) => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data import success");
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
