import { useState,useEffect } from "react";
import { recipeServiceFactory } from "../services/recipeService";
import { useService } from "./useService";


const baseUrl='http://localhost:3030/data/recipes'
const sort = '?sortBy=_createdOn%20desc';
const selection='?select=_id%2Cname%2CimageUrl%2Cdescription';

const useFetchRecipes=()=>{
    const [recipes, setRecipes] = useState([]);
    // const recipeService=useService(recipeServiceFactory)

    useEffect(() => {
      fetch(`${baseUrl}${sort}${selection}`)
        .then(res => res.json())
        .then(result => {
          // console.log(result);
          setRecipes(result)
  
        })
    //   console.log(recipes);
    }, []);
    return [recipes,setRecipes];
}
export default useFetchRecipes;