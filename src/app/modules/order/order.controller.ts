import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validation";

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    if (email) {
      const userOrder = await OrderService.getSingleUserOrderFromDb(
        email as string,
      );

      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: userOrder,
      });
    }

    const result = await OrderService.getAllOrderFromDb();

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
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
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error,
    });
  }
};

export const OrderController = {
  getAllOrder,
  createOrder,
};
