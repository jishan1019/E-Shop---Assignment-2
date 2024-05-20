import { z } from "zod";

const VariantValidationSchema = z.object({
  type: z.string({
    required_error: "Variant type is require",
  }),
  value: z.string({
    required_error: "Variant value is require",
  }),
});

const InventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "Inventory quantity is require",
  }),
  inStock: z.boolean({
    required_error: "InStock is require",
  }),
});

const ProductValidationSchema = z.object({
  name: z.string({ required_error: "Product name is require" }),
  description: z.string({ required_error: "Product description is require" }),
  price: z.number({ required_error: "Product price is require" }),
  category: z.string({ required_error: "Product category is require" }),
  tags: z.array(z.string({ required_error: "Product tags is require" })),
  variants: z.array(VariantValidationSchema, {
    required_error: "Product variants is require",
  }),
  inventory: InventoryValidationSchema,
});

export {
  ProductValidationSchema,
  InventoryValidationSchema,
  VariantValidationSchema,
};
