import './myRecipes.css'
import { useAuthContext } from "../../contexts/AuthContext";
import useGetMyRecipes from "../../hooks/useGetMyRecipes";
import RecipeCartd from "../RecipeCard/RecipeCard";
import Loading from '../loading/Loading';

const MyRecipes = () => {
    const { userId } = useAuthContext();
    const {myRecipes,loading} = useGetMyRecipes(userId);

    if(loading){
        return<Loading/>;
    };
    
    return (
        <section id="myRecipes" className="myRecipes">
            <h1>My Recipes</h1>
                {myRecipes.length ?
                    <ul className="myRecipes__list">
                        {myRecipes.map(x => <RecipeCartd key={x._id} recipe={x} />)}
                    </ul> :
                    <p className="no-recipes">No Recipes in database!</p>
                }
        </section>
    );
};

export default MyRecipes;