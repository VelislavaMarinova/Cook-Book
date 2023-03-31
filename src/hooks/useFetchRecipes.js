import { useState, useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";
import { useService } from "./useService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const baseUrl = 'http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection = '?select=_id%2Cname%2CimageUrl%2Cdescription';

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    

    // const{token}=useContext(AuthContext)
const recipeService = recipeServiceFactory()
console.log(`recipeServiceFactory No token`);

    useEffect(() => {
        recipeService.getAll()
            .then(res => {
                console.log(res);
                setRecipes(res)
            })

    //     fetch(`${baseUrl}${sort}${selection}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             // console.log(result);
    //             setRecipes(result)

    //         })
    //       console.log(recipes);
    }, []);

    // useEffect(() => {
    //   fetch(`${baseUrl}${sort}${selection}`)
    //     .then(res => res.json())
    //     .then(result => {
    //       // console.log(result);
    //       setRecipes(result)

    //     })
    // //   console.log(recipes);
    // }, []);
    return [recipes, setRecipes];
}
export default useFetchRecipes;