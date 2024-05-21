import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const getAllOrderFromDb = async (email: string) => {
  const result = email ? await Order.find({ email }) : await Order.find();
  return result;
};

const createOrderIntoDb = async (item: IOrder) => {
  const product = await Product.findOne({ _id: item.productId });

  if (!product) {
    throw new Error("Product not found");
  } else if (item.quantity > product.inventory.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  product.inventory.quantity -= item.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await Product.updateOne(
    { _id: item.productId },
    { $set: product },
    { new: true },
  );
  const result = await Order.create(item);

  return result;
};

export const OrderService = {
  getAllOrderFromDb,
  createOrderIntoDb,
};
