import database from "../database";
import { AppError } from "../errors";

const verifyIfCategoryIdExistsMiddleware = async (req, res, next) => {
    const id = req.params.id;
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

    req.query = queryResponse.rows[0]
        
    if(!queryResponse) {
        throw new AppError(400, "Category not exist");
    }

    next()
}

export { verifyIfCategoryIdExistsMiddleware };