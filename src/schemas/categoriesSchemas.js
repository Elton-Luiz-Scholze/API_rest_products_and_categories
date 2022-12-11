import * as yup from "yup";

const createCategorieSchema = yup.object().shape({
    name: yup.string().trim().max(200).required()
});

const returnCategoryData = yup.object().shape({
    id: yup.number(),
    name: yup.string().trim().max(200)
});

export { createCategorieSchema, returnCategoryData };