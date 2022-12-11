import { createProductsService, deleteProductsService, listProductByIdServices, listProductsByCategoryIdService, listProductsService, updateProductService } from "../services/productsServices";

const listProductsController = async (req, res) => {
    const data = await listProductsService();

    return res.status(200).json(data);
}

const createProductsController = async (req, res) => {
    const data = await createProductsService(req.validatedBody);

    return res.status(201).json(data);
}

const listProductByIdController = async (req, res) => {
    const id = req.params.id;
    const data = await listProductByIdServices(id);

    return res.status(200).json(data);
}

const deleteProductsController = async (req, res) => {
    const id = req.params.id;
    const data = await deleteProductsService(id);

    return res.status(204).json(data);
}

const listProductsByCategoryIdController = async (req, res) => {
    const id = req.params.id;
    const data = await listProductsByCategoryIdService(id);

    return res.status(200).json(data);
}

const updateProductController = async (req, res) => {
    const id = req.params.id;
    const data = await updateProductService(id, req.validatedBody);

    return res.status(200).json(data);
}

export { listProductsController, createProductsController, listProductByIdController, deleteProductsController, listProductsByCategoryIdController, updateProductController };