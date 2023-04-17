import { useService } from "./useService";
import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";



const useGetOneRecipe = (recipeId) => {

    const [oneRecipe, setOneRecipe] = useState({});
    const [loading, setLoading] = useState(true)
    const recipeService = useService(recipeServiceFactory);

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getOne(recipeId)
                .then(result => {
                    setOneRecipe(result);
                    setLoading(false)
                })
        } catch(err) {
            throw new Error(err);
        }
    }, [recipeId, recipeService]);

    return { oneRecipe, setOneRecipe, loading }
}
export default useGetOneRecipe;