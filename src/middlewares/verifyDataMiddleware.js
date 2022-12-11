const verifyDataMiddleware = (schema) => async (req, res, next) => {
    try {
        const validatedData = await schema.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        })

        req.validatedBody = validatedData;

        return next();
    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
}

export { verifyDataMiddleware }