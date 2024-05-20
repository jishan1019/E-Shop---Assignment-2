import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const getAllProductFromDb = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificProductFromDb = async (id: string) => {
  const result = await Product.find({ _id: id });
  return result;
};

const createProductIntoDb = async (item: IProduct) => {
  const result = await Product.create(item);
  return result;
};

const updateProductIntoDb = async (id: string, item: IProduct) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: item },
    { new: true },
  );
  return result;
};

export const ProductService = {
  getAllProductFromDb,
  getSpecificProductFromDb,
  createProductIntoDb,
  updateProductIntoDb,
};
