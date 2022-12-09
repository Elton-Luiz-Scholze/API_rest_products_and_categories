import { createCategoriesService, listCategoriesService } from "../services/categoriesServices";

const listCategoriesController = async (req, res) => {
    const [status, data] = await listCategoriesService();

    return res.status(status).json(data);
}

const createCategoriesController = async (req, res) => {
    const [status, data] = await createCategoriesService(req.body);

    return res.status(status).json(data);
}

export { listCategoriesController, createCategoriesController };