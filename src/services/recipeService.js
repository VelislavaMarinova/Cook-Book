import { requestFactory } from './requester';
const baseUrl='http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection='?select=_id%2Cname%2CimageUrl%2Cdescription';

export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}${sort}${selection}`);
        const recipes = Object.values(result);
    
        return recipes;
    };
    
    const getOne = async (recipeId) => {
        const result = await request.get(`${baseUrl}/${recipeId}`);
    
        return result;
    };
    
    const create = async (recipeData) => {
        const result = await request.post(baseUrl, recipeData);
    
        // console.log(result);
    
        return result;
    };
  
    
    // const addComment = async (gameId, data) => {
    //     const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
    
    //     return result;
    // };

    const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);

    const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        // addComment,
        delete: deleteRecipe,
    };
}