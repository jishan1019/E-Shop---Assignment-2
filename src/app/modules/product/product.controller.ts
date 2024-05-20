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

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSpecificProductFromDb(productId);

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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const result = await ProductService.updateProductIntoDb(
      productId,
      productData,
    );

    res.status(201).json({
      success: true,
      message: "Product updated successfully!",
      data: productData,
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
  getSpecificProduct,
  getAllProduct,
  updateProduct,
};
