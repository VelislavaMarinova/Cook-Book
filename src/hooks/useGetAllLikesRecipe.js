import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetAllLikesRecipes = (recipeId) => {
    const [likes, setLikes] = useState('');
    const [loading, setLoading] = useState(true)
    const recipeService = useMemo(() => recipeServiceFactory('', '', '', recipeId), [recipeId])

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getAllLikesRecipe()
                .then(res => {
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