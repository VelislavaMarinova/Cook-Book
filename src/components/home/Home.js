
import './Home.css'
import RecipeCartd from '../RecipeCard/RecipeCard';
import { useContext } from 'react';
import { useDataContext } from '../../contexts/DataContext';
import useGetThreeRecipes from '../../hooks/useGetThreeRecipes';
const Home = () => {
    const latestThreeRecipes=useGetThreeRecipes()
    // const {recipes}=useDataContext();
    // const latestThreeRecipes = recipes.slice(0,3)
    return (
        
  
    <section id="dashboard-page" className="dashboard">
        <h1>Latest Added Recipes</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-recipes-list">
            {latestThreeRecipes.map(x=> <RecipeCartd key={x._id} recipe={x}/>)}
            
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-recipes">No Recipes in database!</p>
    </section>)
       
};
export default Home;