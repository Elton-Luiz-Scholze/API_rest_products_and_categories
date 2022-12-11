import { Router } from "express";
import { createProductsController, listProductsController } from "../controllers/productsControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createProductSchema } from "../schemas/productsSchemas";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);
productsRoutes.post("", verifyDataMiddleware(createProductSchema), createProductsController);


export { productsRoutes };