import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetThreeRecipes = () => {

    const [latestThreeRecipes, setLatestThreeRecipes] = useState();
    const [loading, setLoading] = useState(true);
    //const recipeService = recipeServiceFactory()

    const recipeService = useMemo(() => recipeServiceFactory(), [])

    useEffect(() => {
        setLoading(true);
        try {
            recipeService.getThree()
                .then(res => {
                    setLoading(false)
                    setLatestThreeRecipes(res)
                })
            
        } catch (error) {
            throw new Error(error);
        }
    }, [recipeService]);

    return { latestThreeRecipes, loading };
};

export default useGetThreeRecipes;