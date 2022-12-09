import express from "express";

import { categoriesRoutes } from "./routers/categoriesRoutes";
import { productsRoutes } from "./routers/productsRoutes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes)


export default app;
