import database from "../database"

const listProductsService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            products
        ;`
    );

    return [200, queryResponse.rows];
}

const createProductsService = async (productData) => {
    const { name, price, category } = productData;

    const queryId = await database.query(
        `SELECT
            id
        FROM
            categories
        WHERE
            categories.name = '${category}'`
    );

    const { id } = queryId.rows[0];

    const queryResponse = await database.query(
        `INSERT INTO
            products (name, price, category_id )
        VALUES
            ($1, $2, $3)
        RETURNING *;`,
        [name, price, id]
    );

    return [201, queryResponse.rows];
}

export { listProductsService, createProductsService };