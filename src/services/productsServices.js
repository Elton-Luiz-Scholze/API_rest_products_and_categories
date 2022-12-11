import database from "../database"
import { AppError } from "../errors";
import { returnProductData } from "../schemas/productsSchemas";

const listProductsService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            products
        ;`
    );

    return queryResponse.rows;
}

const createProductsService = async (productData) => {
    const { name, price, category_id } = productData;

    const queryResponse = await database.query(
        `INSERT INTO
            products (name, price, category_id )
        VALUES
            ($1, $2, $3)
        RETURNING *;`,
        [name, price, category_id]
    );

    const returnProduct = await returnProductData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnProduct;
}

const listProductByIdServices = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            id = $1
        ;`,
        [id]
    );
    if(!queryResponse) {
        throw new AppError(404, "Category not exist");
    }

    const returnProduct = await returnProductData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnProduct;
}

const deleteProductsService = async (id) => {
    const queryResponse = await database.query(
        `DELETE FROM
            products
        WHERE
            id = $1
        ;`,
        [id]
    );

    return {};
}

const listProductsByCategoryIdService = async (id) => {
    const queryResponse = await database.query(
        `SELECT 
            prod.name, prod.price, cat.name as category
        FROM
            products prod
        JOIN
            categories cat
        ON
            prod.category_id = $1
        ;`,
        [id]
    );

    return queryResponse.rows;
}

export { listProductsService, createProductsService, listProductByIdServices, deleteProductsService, listProductsByCategoryIdService };