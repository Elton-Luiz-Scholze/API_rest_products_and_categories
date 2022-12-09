import express from "express";
// import "dotenv/config"

import { categoriesRoutes } from "./routers/categoriesRoutes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

export default app;
