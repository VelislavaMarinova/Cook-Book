import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetThreeRecipes = (category) => {

    const [threeRecipes, setThreeRecipes] = useState();
    const [loading, setLoading] = useState(true);
    //const recipeService = recipeServiceFactory()

    const recipeService = useMemo(() => recipeServiceFactory(), [])

    useEffect(() => {
        setLoading(true)
        recipeService.getThree()
            .then(res => {
                setLoading(false)
                setThreeRecipes(res)
            })
    }, [recipeService]);

    console.log('home', threeRecipes);

    return { data: threeRecipes, loading };
}
export default useGetThreeRecipes;