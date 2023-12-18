import { baseUrl, selection, sort, urlGetAllLikesRecipe, urlGetByCategory, urlGetLikesForCurrentRecipeFromSpecificUser, urlGetMyRecipes, urlGetThree, urlLikeRecipe } from "../utils/urlUtils";
import { requestFactory } from "./requester";

export const recipeServiceFactory = (token, category, userId, recipeId) => {

    const request = requestFactory(token);
    
    const getAllCategories =()=> request.get('/data/categories');
    const getAll = () => request.get(`${baseUrl}${sort}${selection}`);
    const getThree = () => request.get(urlGetThree);
    const getByCategory = () => request.get(`${urlGetByCategory(category)}`);
    const getMyRecipes = () => request.get(urlGetMyRecipes(userId));

    const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);
    const create = (recipeData) => request.post(baseUrl, recipeData, token);
    const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data, token);
    const deleteRecipe = (recipeId) => request.del(`${baseUrl}/${recipeId}`, token);

    const getLikesForForCurrentRecipeFromSpecificUser = () => request.get(urlGetLikesForCurrentRecipeFromSpecificUser(recipeId, userId))
    const postLikeRecipe = (recipeId) => request.post(urlLikeRecipe, recipeId, token);
    const getAllLikesRecipe = () => request.get(urlGetAllLikesRecipe(recipeId))
    return {
        getAllCategories,
        getAll,
        getOne,
        create,
        edit,
        deleteRecipe,
        getThree,
        getByCategory,
        getMyRecipes,
        getLikesForForCurrentRecipeFromSpecificUser,
        postLikeRecipe,
        getAllLikesRecipe,
    };
};

