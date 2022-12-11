import { Router } from "express";
import { createCategoriesController, deleteCategoryController, listCategoriesController, listCategoryByIdController } from "../controllers/categoriesControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createCategorieSchema } from "../schemas/categoriesSchemas";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.post("", verifyDataMiddleware(createCategorieSchema), createCategoriesController);
categoriesRoutes.get("/:id", listCategoryByIdController);
categoriesRoutes.delete("/:id", deleteCategoryController)


export { categoriesRoutes };