import { Link } from 'react-router-dom'

import './RecipeCard.css'
const RecipeCartd = ({
    recipe,
}) => {
    // console.log(recipe);
    return (
        <li className="recipeCard">
            <div className="recipeCard__info">
                <h3>{recipe.name}</h3>
                <p><span className="recipeCard__desc" >Description:</span> {recipe.description}</p>
            </div>
            <div className="recipeCard__img">
                <img src={recipe.imageUrl} alt="food" />
            </div>
            <Link className="button" to={`/catalog/${recipe._id}`}>
                Details
            </Link>
        </li>
    )
};

export default RecipeCartd;