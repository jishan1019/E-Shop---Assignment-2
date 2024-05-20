import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSpecificProduct);
router.post("/", ProductController.createProduct);
router.put("/:productId", ProductController.updateProduct);

export const ProductRoutes = router;
