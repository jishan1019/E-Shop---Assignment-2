import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const getAllProductFromDb = async () => {
  const result = await Product.find();
  return result;
};

const createProductIntoDb = async (item: IProduct) => {
  const result = await Product.create(item);
  return result;
};

export const ProductService = {
  getAllProductFromDb,
  createProductIntoDb,
};
