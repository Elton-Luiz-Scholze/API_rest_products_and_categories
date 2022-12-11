import database from "../database"
import { AppError } from "../errors";
import { returnCategoryData } from "../schemas/categoriesSchemas";

const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories
        ;`
    );

    return queryResponse.rows;
}

const createCategoriesService = async (categoryData) => {
    const { name } = categoryData;

    const findCategory = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            name = $1
        ;`,
        [name]
    );
    
    if(findCategory.rowCount > 0) {
        throw new AppError(400, "Category already exists");
    }

    const queryResponse = await database.query(
        `INSERT INTO
            categories (name)
        VALUES
            ($1)
        RETURNING *;`,
        [name]
    );

    const returnCategory = await returnCategoryData.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnCategory;
}

const listCategoryByIdService = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1
        ;`,
        [id]
    );
        
    if(!queryResponse) {
        throw new AppError(400, "Category not exist");
    }

    return queryResponse.rows[0];
}

const deleteCategoryService = async (id) => {
    const queryResponse = await database.query(
        `DELETE FROM
            categories
        WHERE
            id = $1
        ;`,
        [id]
    );
    
    return {};
}

export { listCategoriesService, createCategoriesService, listCategoryByIdService, deleteCategoryService };