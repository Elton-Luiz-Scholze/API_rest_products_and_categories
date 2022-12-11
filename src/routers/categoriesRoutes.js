import { Router } from "express";
import { createCategoriesController, listCategoriesController, listCategoryByIdController } from "../controllers/categoriesControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createCategorieSchema } from "../schemas/categoriesSchemas";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.post("", verifyDataMiddleware(createCategorieSchema), createCategoriesController);
categoriesRoutes.get("/:id", listCategoryByIdController);


export { categoriesRoutes };