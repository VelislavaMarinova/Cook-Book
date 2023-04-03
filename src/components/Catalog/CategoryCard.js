
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";

const CategoryCard=({
    category
})=>{
    console.log(category);
    const {recipes}=useDataContext()
    console.log();
    return(
        (
            <li className="recipeCard"><Link to={`/catalog/${category.category}`}>

                <div className="recipeCard__info">
                    <h3>{category.title}</h3>
                    {/* <p><span className="recipeCard__desc" >Description:</span> {recipe.description}</p> */}
                </div>
                <div className="recipeCard__img">
                    <img src={category.img} alt="food" />
                </div>
            </Link>
              
            </li>
        )
    )
}
export default CategoryCard;