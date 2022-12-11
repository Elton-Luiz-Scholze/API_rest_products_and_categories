class AppError extends Error  {
    constructor(statusCode = 400, message) {
        super()
        this.statusCode = statusCode
        this.message = { message }
    }
}

const errorHandler = (error, req, res, next) => {
    const { statusCode, message } = error;

    if(error instanceof AppError) {
        return res.status(statusCode).json(message)
    }

    if (error.message.includes("invalid input syntax")) {
        return res.status(404).json({ message: "Id invalido" });
    }

    return res.status(500).json({ message: "Internal server error" });
}

export { AppError, errorHandler };