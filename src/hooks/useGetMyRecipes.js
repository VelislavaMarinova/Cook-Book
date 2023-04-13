import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";


const baseUrl = 'http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';


const useGetMyRecipes = (userId) => {

    const [myRecipes, setMyRecipes] = useState([]);
    const recipeService = recipeServiceFactory("","",userId)

    useEffect(() => {
        recipeService.getMyRecipes()
            .then(res => {
                setMyRecipes(res)
            })
    }, []);

    return myRecipes;
}
export default useGetMyRecipes;