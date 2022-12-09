import { listCategoriesService } from "../services/categoriesServices";

const listCategoriesController = async (req, res) => {
    const [status, data] = await listCategoriesService();

    return res.status(status).json(data);
}

export { listCategoriesController };