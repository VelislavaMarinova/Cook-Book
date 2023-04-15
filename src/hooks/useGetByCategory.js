import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";


export const useGetByCategory = (category) => {

    const [recypesByCategory, setRecypesByCategory] = useState([]);
    const [loading,setLoading]=useState(true)

    const recipeService =useMemo(()=> recipeServiceFactory('', category, ""),[category])
    // console.log(`recipeServiceFactory No token`);

    useEffect(() => {
        setLoading(true);
        try {
            recipeService.getByCategory()
                .then(res => {
                    setRecypesByCategory(res)
                    setLoading(false)
                })
        } catch (error) {
            throw new Error(error);
        };
    

    }, [recipeService]);


    return {recypesByCategory, loading};
}
