import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (item: IProduct) => {
  const result = await Product.create(item);
  return result;
};

export const ProductService = {
  createProductIntoDb,
};
