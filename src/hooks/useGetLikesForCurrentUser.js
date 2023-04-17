import { useEffect, useMemo, useState } from "react";
import { recipeServiceFactory } from "../services/recipeService";

const useGetLikesForCurrentUser = (token, userId, recipeId) => {
    const [isLiked, setIsliked] = useState(false);
    const recipeService = useMemo(() => recipeServiceFactory(token, "", userId, recipeId), [token, userId, recipeId]);

    useEffect(() => {
        setIsliked(false)
        try {
            recipeService.getLikesForForCurrentRecipeFromSpecificUser()
                .then(res => {
                    if (res === 1) {
                        setIsliked(true)
                    }
                })
        } catch (error) {
            throw new Error(error)
        };

    }, [recipeService]);

    return {isLiked,setIsliked}
}
export default useGetLikesForCurrentUser;