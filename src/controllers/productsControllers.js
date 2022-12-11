import { createProductsService, listProductsService } from "../services/productsServices";

const listProductsController = async (req, res) => {
    const data = await listProductsService();

    return res.status(200).json(data);
}

const createProductsController = async (req, res) => {
    const data = await createProductsService(req.validatedBody);

    return res.status(201).json(data);
}

export { listProductsController, createProductsController };