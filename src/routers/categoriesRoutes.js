import { Router } from "express";
import { listCategoriesController } from "../controllers/categoriesControllers";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);

export { categoriesRoutes };