import { ProductDto } from "../dto/product.dto";
import { handleStatus } from "../helpers/statusResponse";
import { plainToClass } from "class-transformer";

import { Products } from "../models/product";

const add = async (input:ProductDto) => {
  if (!input || !input.title) return handleStatus(500);
  let product = plainToClass(Products, input);
  try {
    await product.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getAll = async () => {
  try {
    let products = await Products.find({active:true});
    
    return handleStatus(200, null, products);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getById = async (id: string) => {
  let product = await Products.findById(id);
  if (!product) return handleStatus(404);
  return handleStatus(200, null, product);
};
const remove = async (id: string) => {
  let product = await Products.findById(id);
  if (!product) return handleStatus(404);
  product.active = false;
  try {
    await product.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const update = async (input: ProductDto) => {
  if (!input) return handleStatus(400);
  let product = await Products.findById(input._id);
  if (!product) return handleStatus(404);
  console.log(input);

  

  try {
    await product.update(input);
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getAllProductwithKey = async (key?: string) => {
  try {
    let products = await Products.find({
      active:true,
      title: { $regex: key || /^.*/, $options: "i" }
    })
      
      
      console.log(key);
    return handleStatus(200, null, products);
  } catch (e) {
    return handleStatus(500,e);
  }
};

const restore = async () => {};
export const ProductRepo = { add, getAll, getById, remove, update, getAllProductwithKey };
