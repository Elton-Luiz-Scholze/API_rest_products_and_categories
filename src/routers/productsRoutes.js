import { Router } from "express";
import { createProductsController, deleteProductsController, listProductByIdController, listProductsByCategoryIdController, listProductsController, updateProductController } from "../controllers/productsControllers";
import { verifyDataMiddleware } from "../middlewares/verifyDataMiddleware";
import { createProductSchema, returnProductData } from "../schemas/productsSchemas";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);
productsRoutes.post("", verifyDataMiddleware(createProductSchema), createProductsController);
productsRoutes.get("/:id", listProductByIdController);
productsRoutes.delete("/:id", deleteProductsController);
productsRoutes.get("/category/:id", listProductsByCategoryIdController);
productsRoutes.patch("/:id", verifyDataMiddleware(returnProductData), updateProductController);


export { productsRoutes };