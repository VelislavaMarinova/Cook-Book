import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)
    const recipeService = useMemo(() => recipeServiceFactory(), [])

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getAll()
                .then(res => {
                    setRecipes(res)
                    setLoading(false)
                })

        } catch (error) {
            throw new Error(error);
        };
    }, [recipeService])

    return { recipes, setRecipes, loading };
}
export default useGetAllRecipes;