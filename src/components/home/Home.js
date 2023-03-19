
import './Home.css'
import OtherRecipes from './OtherRecipes';
const Home = ({
    recipes,
}) => {
    const latestThreeRecipes = recipes.slice(0,3)
    return (<section id="dashboard-page" className="dashboard">
        <h1>Latest Added Recipes</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-recipes-list">
            {latestThreeRecipes.map(x=> <OtherRecipes recipe={x}/>)}
            
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-recipes">No Recipes in database!</p>
    </section>)
};
export default Home;