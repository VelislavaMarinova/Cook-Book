import { recipeServiceFactory } from "../services/recipeService";
import { useService } from "./useService";
import { useState,useEffect } from "react";



const useSelectRecipe=(recipeId)=>{
    
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory)
    
    
    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setSelectedRecipe(result);
            })
    }, [recipeId,recipeService]);
    return selectedRecipe
}
export default useSelectRecipe;