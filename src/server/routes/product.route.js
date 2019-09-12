import { Router } from "express";
import auth from "../middleware/auth";
import productController from "./../controller/product.controller";

const router = Router();

// router.get("/", productController.getAllProduct);
router.post("/", auth, productController.createProduct);
// router.get("/:id", productController.getProductById);
// router.put("/update/:id", productController.updateProductById);
// router.delete("/delete/:id", productController.deleteProductById);

export default router;
