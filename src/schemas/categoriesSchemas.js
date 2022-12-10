import * as yup from "yup";

const createCategorieSchema = yup.object().shape({
    name: yup.string().trim().lowercase().max(200).required()
});

const returnCategoryData = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().trim().lowercase().max(200).required()
});

return { createCategorieSchema, returnCategoryData };