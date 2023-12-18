import { useState, useEffect, useMemo } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetAllCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    const recipeService = useMemo(() => recipeServiceFactory(), [])

    useEffect(() => {
        setLoading(true)
        try {
            recipeService.getAllCategories()
                .then(res => {
                    setCategories(res)
                    setLoading(false)
                })

        } catch (error) {
            throw new Error(error);
        };
    }, [recipeService])

    return { categories, setCategories, loading };
}
export default useGetAllCategories;