import { Router } from "express";
import { createProductsController, deleteProductsController, listProductByIdController, listProductsByCategoryIdController, listProductsController } from "../controllers/productsControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createProductSchema } from "../schemas/productsSchemas";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);
productsRoutes.post("", verifyDataMiddleware(createProductSchema), createProductsController);
productsRoutes.get("/:id", listProductByIdController);
productsRoutes.delete("/:id", deleteProductsController);
productsRoutes.get("/:id", listProductsByCategoryIdController);


export { productsRoutes };