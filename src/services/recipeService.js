// import { requestFactory } from './requester';
// const baseUrl='http://localhost:3030/data/recipes'
// const sort = '?sortBy=_createdOn%20desc';
// const selection='?select=_id%2Cname%2CimageUrl%2Cdescription';

// export const recipeServiceFactory = (token) => {
//     const request = requestFactory(token);

//     const getAll = async () => {
//         const result = await request.get(`${baseUrl}${sort}${selection}`);
//         console.log(result);
//         const recipes = Object.values(result);

//         return recipes;
//     };

//     const getOne = async (recipeId) => {
//         const result = await request.get(`${baseUrl}/${recipeId}`);

//         return result;
//     };

//     const create = async (recipeData) => {
//         const result = await request.post(baseUrl, recipeData);

//         // console.log(result);

//         return result;
//     };


//     // const addComment = async (gameId, data) => {
//     //     const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

//     //     return result;
//     // };

//     const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);

//     const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);


//     return {
//         getAll,
//         getOne,
//         create,
//         edit,
//         // addComment,
//         delete: deleteRecipe,
//     };
// }

import { requestFactory } from "./requester";

export const recipeServiceFactory = (token) => {
  
    console.log(`recipeServiceFactory  ${token}`);
  
    // console.log(`havetoken ${haveToken}`);

    
        // const request = requestFactory(haveToken);
        const request = requestFactory(token);
        console.log(`recipeServiceFactory have token ${token}`);
    
        // const request=useService(requestFactory)
    
        // const baseUrl = 'http://localhost:3030/data/games';
        const baseUrl = '/data/recipes'
        const sort = '?sortBy=_createdOn%20desc';
        const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';
    
        const getAll = () => request.get(`${baseUrl}${sort}${selection}`);
    
        const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);
    
        const create = (recipeData) => request.post(baseUrl, recipeData,token);
        const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data,token);
        const deleteRecipe = (recipeId) => request.del(`${baseUrl}/${recipeId}`,token);
    
        return {
            getAll,
            getOne,
            create,
            edit,
            deleteRecipe,
            // addComment,
    
        };
    
    
   
};
