import { useService } from "./useService";
import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";



const useSelectRecipe = (recipeId) => {

    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [loading, setLoading] = useState(true)
    const recipeService = useService(recipeServiceFactory);
    console.log(loading);

    useEffect(() => {
        try {
             setLoading(true)
            recipeService.getOne(recipeId)
                .then(result => {

                  
                    setSelectedRecipe(result);
                    setLoading(false)
                })
        } catch {

        }
    }, [recipeId, recipeService]);

    return { selectedRecipe,setSelectedRecipe, loading }
}
export default useSelectRecipe;