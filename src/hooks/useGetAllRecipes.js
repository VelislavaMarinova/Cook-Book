import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";


// const baseUrl = 'http://localhost:3030/data/recipes'
// const sort = '?sortBy=_createdOn%20desc';
// const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';

const useGetAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const recipeService = recipeServiceFactory()

    useEffect(() => {
        recipeService.getAll()
            .then(res => {
                console.log(res);
                setRecipes(res)
            })
    }, []);


    return [recipes, setRecipes];
}
export default useGetAllRecipes;