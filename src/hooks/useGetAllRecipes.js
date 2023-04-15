import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";


// const baseUrl = 'http://localhost:3030/data/recipes'
// const sort = '?sortBy=_createdOn%20desc';
// const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';

const useGetAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)
    //const recipeService = recipeServiceFactory()
    const recipeService = useMemo(() => recipeServiceFactory(), [])

    useEffect(() => {
        setLoading(true)

        recipeService.getAll()
            .then(res => {
                console.log(res);
                setRecipes(res)
                setLoading(false)


            })
    }, [recipeService]);

    return { recipes, setRecipes, loading };
}
export default useGetAllRecipes;