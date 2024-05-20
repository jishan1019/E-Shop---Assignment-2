import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const getAllOrderFromDb = async () => {
  const result = await Order.find();
  return result;
};

const getSingleUserOrderFromDb = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

const createOrderIntoDb = async (item: IOrder) => {
  const result = await Order.create(item);
  return result;
};

export const OrderService = {
  getAllOrderFromDb,
  getSingleUserOrderFromDb,
  createOrderIntoDb,
};
