import { createCategoriesService, listCategoriesService, listCategoryByIdService } from "../services/categoriesServices";

const listCategoriesController = async (req, res) => {
    const data = await listCategoriesService();

    return res.status(200).json(data);
}

const createCategoriesController = async (req, res) => {
    const data = await createCategoriesService(req.validatedBody);

    return res.status(201).json(data);
}

const listCategoryByIdController = async (req, res) => {
    const id = req.params.id;
    const data = await listCategoryByIdService(id);

    return res.status(200).json(data);
}

export { listCategoriesController, createCategoriesController, listCategoryByIdController };