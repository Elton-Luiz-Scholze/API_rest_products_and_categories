import database from "../database";
import { AppError } from "../errors";

const verifyIfProductIdExistsMiddleware = async (req, res, next) => {
    const id =req.params.id;

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

    req.query = queryResponse.rows[0];
    
    if(!queryResponse) {
        throw new AppError(404, "Category not exist");
    }
    
    next();
}

export { verifyIfProductIdExistsMiddleware }