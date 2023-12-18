import { useService } from "./useService";
import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";



const useGetOneRecipe = (recipeId) => {

    const [oneRecipe, setOneRecipe] = useState({});
    const [loading, setLoading] = useState(true)
    const recipeService = useService(recipeServiceFactory);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getOne(recipeId)
                .then(result => {
                    if (result.toString() === "Error: Resource not found") {
                        setError(true)
                        setLoading(false)
                    }
                    setOneRecipe(result);
                    setLoading(false)
                })
        } catch (err) {
            setError(err)
            throw new Error(err);
        }
    }, [recipeId, recipeService]);

    return { oneRecipe, setOneRecipe, loading, error }
}
export default useGetOneRecipe;