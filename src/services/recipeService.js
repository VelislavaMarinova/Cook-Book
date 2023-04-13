import { requestFactory } from "./requester";

export const recipeServiceFactory = (token, category,userId) => {

    console.log(`recipeServiceFactory${userId}`);

    // console.log(`havetoken ${haveToken}`);


    // const request = requestFactory(haveToken);
    const request = requestFactory(token);
    // console.log(`recipeServiceFactory have token ${token}`);

    // const request=useService(requestFactory)

    // const baseUrl = 'http://localhost:3030/data/games';
    const urlGetByCategory = `/data/recipes?where=category%3D%22${category}%22`;
    const baseUrl = '/data/recipes';
    const sort = '?sortBy=_createdOn%20desc';
    const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';
    const urlGetThree = '/data/recipes?sortBy=_createdOn%20desc&pageSize=3';
    const urlGetMyRecipes = `/data/recipes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;

    const getAll = () => request.get(`${baseUrl}${sort}${selection}`);
    const getThree = () => request.get(urlGetThree);
    const getByCategory = () => request.get(urlGetByCategory);
    const getMyRecipes = () => request.get(urlGetMyRecipes);
    
    const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);
    const create = (recipeData) => request.post(baseUrl, recipeData, token);
    const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data, token);
    const deleteRecipe = (recipeId) => request.del(`${baseUrl}/${recipeId}`, token);

    return {
        getAll,
        getOne,
        create,
        edit,
        deleteRecipe,
        getThree,
        getByCategory,
        getMyRecipes
        // addComment,

    };



};
