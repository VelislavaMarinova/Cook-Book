import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetMyRecipes = (userId) => {

    const [myRecipes, setMyRecipes] = useState([]);
    const[loading,setLoading]=useState(true)
    const recipeService = useMemo(() => recipeServiceFactory("", "", userId), [userId])

    useEffect(() => {
        setLoading(true);
        try {
            recipeService.getMyRecipes()
                .then(res => {
                    setMyRecipes(res)
                    setLoading(false)
                })
            
        } catch (error) {
            throw new Error(error);
        }
    }, [recipeService]);

    return {myRecipes,loading};
};

export default useGetMyRecipes;