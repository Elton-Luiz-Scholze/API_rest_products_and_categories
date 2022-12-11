import * as yup from "yup";

const createProductSchema = yup.object().shape({
    name: yup.string().trim().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number().required(),
});

const returnProductData = yup.object().shape({
    id: yup.string().uuid(),
    name: yup.string().trim().max(200),
    price: yup.number(),
    category_id: yup.number()
});

export { createProductSchema, returnProductData };