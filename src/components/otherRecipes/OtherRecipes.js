import {Link} from 'react-router-dom'

import './OtherRecipes.css'
const OtherRecipes = ({
    recipe,
}) => {
    return (
        <li className="otherRecipes">
            <h3>{recipe.Name}</h3>
            <p>Description: {recipe.Description}</p>
            <div className="img">
                <img src={recipe.url} alt="food"/>
            </div>
            <Link className="button" to={`/details/${recipe._id}`}>
                Details
            </Link>
        </li>
    )
};

export default OtherRecipes;