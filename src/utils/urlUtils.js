export const baseUrl = '/data/recipes';
export const sort = '?sortBy=_createdOn%20desc';

export const urlGetByCategory = (category) => {
    return `${baseUrl}?where=category%3D%22${category}%22`;
}

export const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';

export const urlGetThree = `${baseUrl}${sort}&pageSize=3`;

export const urlGetMyRecipes = (userId) => {
  
    return `${baseUrl}?where=_ownerId%3D%22${userId}%22?sortBy=_createdOn%20desc`;

}
export const urlGetLikesForCurrentRecipeFromSpecificUser = (recipeId, userId) => {
    return `/data/likes?where=recipeId%3D%22${recipeId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
}

export const urlLikeRecipe = '/data/likes';

export const urlGetAllLikesRecipe = (recipeId) => {
    return `${urlLikeRecipe}?where=recipeId%3D%22${recipeId}%22&distinct=_ownerId&count`;
}

export const authBase = '/users';
export const loginUrl = `${authBase}/login`;
export const registerUrl = `${authBase}/register`;
export const logoutUrl = `${authBase}/logout`;

