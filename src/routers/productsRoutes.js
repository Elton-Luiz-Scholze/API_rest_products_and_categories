import { Router } from "express";
import { createProductsController, listProductByIdController, listProductsController } from "../controllers/productsControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createProductSchema } from "../schemas/productsSchemas";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);
productsRoutes.post("", verifyDataMiddleware(createProductSchema), createProductsController);
productsRoutes.get("/:id", listProductByIdController);


export { productsRoutes };