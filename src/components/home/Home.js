
import './Home.css'
import RecipeCartd from '../RecipeCard/RecipeCard';
import useGetThreeRecipes from '../../hooks/useGetThreeRecipes';
import Loading from '../loading/Loading';
const Home = () => {
    const { latestThreeRecipes, loading } = useGetThreeRecipes();
    console.log("home", latestThreeRecipes);

    if (loading) {
        return <Loading />;
    };

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Latest Added Recipes</h1>
            {latestThreeRecipes ?
                <ul className="other-recipes-list">
                    {latestThreeRecipes.map(x => <RecipeCartd key={x._id} recipe={x} />)}
                </ul> :
                <p className="no-recipes">No Recipes in database!</p>
            }
        </section>
    );
};

export default Home;