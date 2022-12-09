import { createProductsService, listProductsService } from "../services/productsServices";

const listProductsController = async (req, res) => {
    const [status, data] = await listProductsService();

    return res.status(status).json(data);
}

const createProductsController = async (req, res) => {
    const [status, data] = await createProductsService(req.body);

    return res.status(status).json(data);
}

export { listProductsController, createProductsController };