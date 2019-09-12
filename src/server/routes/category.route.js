import {Router} from 'express'
import auth from '../middleware/auth'
import categoryController from './../controller/category.controller'

const router = Router();

router.get("/", categoryController.getAllCategory);
router.post("/", auth, categoryController.createCategory);
router.get("/:id", categoryController.getCategoryById);
router.put("/update/:id", categoryController.updateCategoryById);
router.delete("/delete/:id", categoryController.deleteCategoryById);

export default router