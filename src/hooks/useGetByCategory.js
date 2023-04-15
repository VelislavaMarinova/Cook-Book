import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";


export const useGetByCategory = (category) => {

    const [recypesByCategory, setRecypesByCategory] = useState([]);

    const recipeService =useMemo(()=> recipeServiceFactory('', category, ""),[category])
    // console.log(`recipeServiceFactory No token`);

    useEffect(() => {
        recipeService.getByCategory()
            .then(res => {
                // console.log(res);
                setRecypesByCategory(res)
            })

    }, [recipeService]);


    return recypesByCategory;
}
