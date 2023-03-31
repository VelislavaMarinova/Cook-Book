import { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import RecipeCartd from '../RecipeCard/RecipeCard';
const Catalog = () => {
    const {recipes}=useContext(DataContext)
    return (<section id="dashboard-page" className="dashboard">
        <h1>All Recipes</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-recipes-list">
            {recipes.map(x=> <RecipeCartd key={x._id} recipe={x}/>)}
            
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-recipes">No Recipes in database!</p>
    </section>)
};
export default Catalog;