import { useState,useEffect } from "react";

const baseUrl = 'http://localhost:3030/data/recipes';

const useFetchRecipes=()=>{
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
          // console.log(result);
          setRecipes(result)
  
        })
      console.log(recipes);
    }, []);
    return recipes;
}
export default useFetchRecipes;