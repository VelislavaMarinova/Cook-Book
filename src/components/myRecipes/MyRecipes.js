import './myRecipes.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useGetMyRecipes from "../../hooks/useGetMyRecipes";
import RecipeCartd from "../RecipeCard/RecipeCard";

const MyRecipes = () => {
    const { userId } = useContext(AuthContext);
    const myRecipes = useGetMyRecipes(userId)

    return (
        <section id="myRecipes" className="myRecipes">
            <h1>My Recipes</h1>
          

                {myRecipes ?
                    <ul className="myRecipes__list">
                        {myRecipes.map(x => <RecipeCartd key={x._id} recipe={x} />)}
                    </ul> :
                    <p className="no-recipes">No Recipes in database!</p>
                }
           

        </section>
    );
}

export default MyRecipes;