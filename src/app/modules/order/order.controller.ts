import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validation";

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await OrderService.getAllOrderFromDb(email as string);

    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = OrderValidationSchema.parse(req.body);
    const result = await OrderService.createOrderIntoDb(validatedData);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Insufficient quantity available in inventory") {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    } else if (error.message === "Product not found") {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error,
      });
    }
  }
};

export const OrderController = {
  getAllOrder,
  createOrder,
};
