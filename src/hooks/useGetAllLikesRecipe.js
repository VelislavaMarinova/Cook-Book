import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";


// const baseUrl = 'http://localhost:3030/data/recipes'
// const sort = '?sortBy=_createdOn%20desc';
// const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';

const useGetAllLikesRecipes = (recipeId) => {
    const [likes, setLikes] = useState('');
    const [loading, setLoading] = useState(true)
    //const recipeService = recipeServiceFactory()
    const recipeService = useMemo(() => recipeServiceFactory('', '', '', recipeId), [recipeId])

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getAllLikesRecipe()
                .then(res => {
                    console.log("res", res);
                    setLikes(res)
                    setLoading(false)
                })

        } catch (error) {
            throw new Error(error);
        };
    }, [recipeService])

    return { likes, setLikes, loading };
}
export default useGetAllLikesRecipes;