import { useDataContext } from "../../contexts/DataContext";
import useFetchRecipes from "../../hooks/useFetchRecipes";
import {useGetByCategory} from "../../hooks/useGetByCategory";
import RecipeCard from "../RecipeCard/RecipeCard";
// import {useGetByCategory} from "../../hooks/useGetByCategory";


const RecypesByCategory = ({
    category
}) => {
    
   const recypesByCategory= useGetByCategory(category)
    // const recipes=useFetchRecipes(category)
    // const { recipes } = useDataContext();
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>All {category}</h1>
            {/* Display ul: with list-items for All books (If any) */}
            <ul className="recipes-list">
                {recypesByCategory.map(x => <RecipeCard key={x._id} recipe={x} />)}

            </ul>
            {/* Display paragraph: If there are no books in the database */}
            <p className="no-recipes">No Recipes in database!</p>
        </section>
    )

}
export default RecypesByCategory;