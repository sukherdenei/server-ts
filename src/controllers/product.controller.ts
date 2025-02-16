import { Request, Response } from "express";
import { products } from "../database/product.db";

export const CreateANewProduct = (req: Request, res: Response) => {
  const { name, description, price } = req.body;

  const findProductName = products.find((product) => product.name === name);
  if (findProductName) {
    res.send("Product already exist");
    return;
  }

  const findProduct = products.find(
    (product) => product.description === description
  );
  if (findProduct) {
    res.send("Product already exist");
    return;
  }

  const lastProduct = products[products.length - 1];
  const newProductId = lastProduct?._id ? Number(lastProduct._id) + 1 : 1;

  const newProduct = { _id: newProductId.toString(), name, description, price };
  products.push(newProduct);
  res.send("Product registered succesfully");
  return;
};

export const getAllProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const allProduct = products.find((product) => product._id === id);
  if (!allProduct) {
    res.send("products not found in shop");
  } else {
    res.send(allProduct);
  }
};

export const getASingleProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const oneProduct = products.find((one) => one._id == id);
  if (oneProduct) {
    res.send(products);
  }
  res.send("search not found!");
};

export const updateAProductById = (req: Request, res: Response) => {
  const { _id, name, description, price } = req.body;
  let editProducts = products.find((edit) => edit._id == _id);
  if (editProducts) {
    editProducts.name = name;
    editProducts.description = description;
    editProducts.price = price;
    editProducts.updatedAt = new Date();
    res.send("Product updated");
  } else {
    res.send("Product not found");
  }
};

export const Delete = (req: Request, res: Response) => {
  const { id } = req.params;
  const edit = products.filter((remove) => remove._id != id);
  res.send("Product deleted");
};

module.exports = {
  CreateANewProduct,
  getAllProduct,
  getASingleProductById,
  updateAProductById,
  Delete,
};
