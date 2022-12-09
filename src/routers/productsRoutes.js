import { Router } from "express";
import { createProductsController, listProductsController } from "../controllers/productsControllers";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);
productsRoutes.post("", createProductsController);


export { productsRoutes };