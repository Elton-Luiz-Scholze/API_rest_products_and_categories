import database from "../database";
import { AppError } from "../errors";

const verifyIfCategoryExistsMiddleware = async (req, res, next) => {
    const { name } = req.body;

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
        throw new AppError(400, 'Category already exists');
    }
    
    next();
}

export { verifyIfCategoryExistsMiddleware }