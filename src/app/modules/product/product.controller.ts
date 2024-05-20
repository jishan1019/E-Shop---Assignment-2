import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductIntoDb(productData);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

export const ProductController = {
  createProduct,
};
