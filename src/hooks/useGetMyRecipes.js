import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetMyRecipes = (userId) => {

    const [myRecipes, setMyRecipes] = useState([]);
    const recipeService = useMemo(() => recipeServiceFactory("", "", userId), [userId])

    useEffect(() => {
        recipeService.getMyRecipes()
            .then(res => {
                setMyRecipes(res)
            })
    }, [recipeService]);

    return myRecipes;
}
export default useGetMyRecipes;