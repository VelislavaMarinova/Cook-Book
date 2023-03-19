import OtherRecipes from '../otherRecipes/OtherRecipes';;
const AllRecipes = ({
    recipes,
}) => {
    
    return (<section id="dashboard-page" className="dashboard">
        <h1>All Recipes</h1>
        {/* Display ul: with list-items for All books (If any) */}
        <ul className="other-recipes-list">
            {recipes.map(x=> <OtherRecipes key={x._id} recipe={x}/>)}
            
        </ul>
        {/* Display paragraph: If there are no books in the database */}
        <p className="no-recipes">No Recipes in database!</p>
    </section>)
};
export default AllRecipes;