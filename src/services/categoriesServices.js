import database from "../database"

const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories
        ;`
    );

    return [200, queryResponse.rows];
}

const createCategoriesService = async (categoryData) => {
    const { name } = categoryData;

    const queryResponse = await database.query(
        `INSERT INTO
            categories (name)
        VALUES
            ($1)
        RETURNING *;`,
        [name]
    );

    return [201, queryResponse.rows];
}

export { listCategoriesService, createCategoriesService };