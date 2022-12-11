import { Router } from "express";
import { createCategoriesController, deleteCategoryController, listCategoriesController, listCategoryByIdController, updateCategoryController } from "../controllers/categoriesControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { verifyIfCategoryExistsMiddleware } from "../middlewares/verifyIfCategoryExistsMiddleware";
import { verifyIfCategoryIdExistsMiddleware } from "../middlewares/verifyIfCategoryIdExistsMiddleware";
import { createCategorieSchema, returnCategoryData } from "../schemas/categoriesSchemas";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.post("", verifyIfCategoryExistsMiddleware, verifyDataMiddleware(createCategorieSchema), createCategoriesController);
categoriesRoutes.get("/:id", verifyIfCategoryIdExistsMiddleware, listCategoryByIdController);
categoriesRoutes.delete("/:id", verifyIfCategoryIdExistsMiddleware, deleteCategoryController);
categoriesRoutes.patch("/:id", verifyDataMiddleware(returnCategoryData),updateCategoryController);

export { categoriesRoutes };