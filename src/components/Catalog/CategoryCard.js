import './categoryCard.css'
import { Link } from "react-router-dom";

const CategoryCard = ({
    category
}) => {
    return (
        (
            <li className="categoryCard"><Link className='categoryCard__link' to={`/catalog/${category.category}`}>
                <div className="categoryCard__info">
                    <h3 >{category.title}</h3>
                </div>
                <div className="categoryCard__img">
                    <img src={category.img} alt="food" />
                </div>
            </Link>

            </li>
        )
    )
}
export default CategoryCard;