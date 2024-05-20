import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string({
    required_error: "Email is require",
  }),
  productId: z.string({
    required_error: "Product Id is require",
  }),
  price: z.number({
    required_error: "Price is require",
  }),
  quantity: z.number({
    required_error: "Inventory quantity is require",
  }),
});

export { OrderValidationSchema };
