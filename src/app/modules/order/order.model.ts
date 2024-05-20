import { Schema, model, connect } from "mongoose";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Order = model<IOrder>("Order", OrderSchema);

export { Order };
