import database from "../database"
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

const listCategoryByIdService = async (queryResponse) => {
    return queryResponse;
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

const updateCategoryService = async (id, categoryData) => {
    let query = `UPDATE 
                    categories 
                SET `;
    
    const keys = Object.keys(categoryData);
    const values = Object.values(categoryData);
    
    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    });

    query = query.slice(0, -2);

    query += `WHERE 
                id = \$${keys.length+=1} 
            RETURNING * ;`

    const queryResponse = await database.query(
        query,
        [...values, id]
    );

    const validatedData = await returnCategoryData.validate(queryResponse.rows[0]);
    
    return validatedData;
}

export { listCategoriesService, createCategoriesService, listCategoryByIdService, deleteCategoryService, updateCategoryService };