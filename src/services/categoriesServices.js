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

export { listCategoriesService };