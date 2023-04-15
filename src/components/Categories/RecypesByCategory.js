import './recypesByCategory.css'
import {useGetByCategory} from "../../hooks/useGetByCategory";
import RecipeCard from "../RecipeCard/RecipeCard";
import Loading from '../loading/Loading';

const RecypesByCategory = ({
    category
}) => {
    console.log('category',category);
   const {recypesByCategory,loading}= useGetByCategory(category)
   if(loading){
    return<Loading/>
   }

    return (
        <section id="category" className="category">
            <h1 className='category__title'>All {category}</h1>
            {recypesByCategory?
            <ul className="category__cards">
                {recypesByCategory.map(x => <RecipeCard key={x._id} recipe={x} />)}

            </ul>:
            <p className="no-recipes">No Recipes in database!</p>
            }
        </section>
    )
};

export default RecypesByCategory;