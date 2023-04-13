import './categoryCard.css'
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";

const CategoryCard = ({
    category
}) => {
    console.log(category);
    const { recipes } = useDataContext()
    console.log();
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