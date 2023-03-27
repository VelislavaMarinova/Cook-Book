import {Link} from 'react-router-dom'

import './OtherRecipes.css'
const OtherRecipes = ({
    recipe,
}) => {
    console.log(recipe);
    return (
        <li className="otherRecipes">
            <h3>{recipe.name}</h3>
            <p>Description: {recipe.description}</p>
            <div className="img">
                <img src={recipe.imageUrl} alt="food"/>
            </div>
            <Link className="button" to={`/catalog/${recipe._id}`}>
                Details
            </Link>
        </li>
    )
};

export default OtherRecipes;