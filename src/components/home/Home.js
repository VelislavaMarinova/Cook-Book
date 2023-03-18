
import './Home.css'
import OtherRecipes from './OtherRecipes';
const Home = () => {
    return (<section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-recipes-list">
            <OtherRecipes />
            <OtherRecipes />
            <OtherRecipes />
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-recipes">No Recipes in database!</p>
    </section>)
};
export default Home;