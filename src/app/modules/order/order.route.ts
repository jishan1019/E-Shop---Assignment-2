import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

router.get("/", OrderController.getAllOrder);
router.post("/", OrderController.createOrder);

export const OrderRoutes = router;
