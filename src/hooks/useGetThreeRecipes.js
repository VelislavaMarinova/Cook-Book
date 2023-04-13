import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";


const baseUrl = 'http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';


const useGetThreeRecipes = (category) => {

    const [threeRecipes, setThreeRecipes] = useState([]);
    const recipeService = recipeServiceFactory()

    useEffect(() => {
        recipeService.getThree()
            .then(res => {
                setThreeRecipes(res)
            })
    }, []);

    return threeRecipes;
}
export default useGetThreeRecipes;