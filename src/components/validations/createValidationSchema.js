import * as yup from 'yup';

const createValidationSchema = yup.object().shape({
    title:yup.string().required("Please enter title!"),
    author: yup.string().required("Please enter First Name!"),//readonly
    description: yup.string().required("Please enter description!"),
    ingredients: yup.string().required("Please enter ingredients!"),
    imageUrl: yup.string().required("Please enter image URL!"),
    method: yup.string().required("Please enter method!"),
    prepare: yup.string().required("Please enter prepare time!"),
    cook: yup.string().required("Please enter cook time!"),
    category: yup.string().oneOf(['main-dishes','salads','soups','drinks','desserts','quick-recipes','healthy-recipes'],'Category must be one of the following values: Main Dishes, Salads, Soups, Drinks, Desserts, Quick Recipes, Healthy Recipes!').required("Please choose category!"),
    dificulty: yup.string().oneOf(['easy','medium','hard'],'Dificulty must be one of the following values: Easy, Medium, Hard!').required("Please choose dificulty!"),
    serves: yup.string().required("Please enter serves!"),

  });

  export default createValidationSchema;