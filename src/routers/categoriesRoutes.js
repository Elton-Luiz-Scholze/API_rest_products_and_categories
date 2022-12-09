import { Router } from "express";
import { createCategoriesController, listCategoriesController } from "../controllers/categoriesControllers";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.post("", createCategoriesController);


export { categoriesRoutes };