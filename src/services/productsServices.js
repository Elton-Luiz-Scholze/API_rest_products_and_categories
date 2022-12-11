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

const listProductByIdServices = async (queryResponse) => {
    const returnProduct = await returnProductData.validate(queryResponse, {
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

const updateProductService = async (id, productData) => {
    let query = `UPDATE 
                    products
                SET `;
    
    const keys = Object.keys(productData);
    const values = Object.values(productData);
    
    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    });

    query = query.slice(0, -2)

    query += `WHERE id = \$${keys.length+=1} RETURNING *;`

    const queryResponse = await database.query(
        query,
        [...values, id]
    );

    const validatedData = await returnProductData.validate(queryResponse.rows[0]);
    
    return validatedData;
}

export { listProductsService, createProductsService, listProductByIdServices, deleteProductsService, listProductsByCategoryIdService, updateProductService };