import database from "../database"
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

export { listProductsService, createProductsService };