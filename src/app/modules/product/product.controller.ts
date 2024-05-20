import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductValidationSchema } from "./product.validation";

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDb();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = ProductValidationSchema.parse(req.body);
    const result = await ProductService.createProductIntoDb(validatedData);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
};
