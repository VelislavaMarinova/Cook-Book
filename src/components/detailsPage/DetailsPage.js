import {useParams} from "react-router-dom"
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
const DetailsPage = () => {
    const recipes = useContext(DataContext)
    const{recipeId}=useParams()
    const selectedRecipe=recipes.find(x=>x._id===recipeId)
    console.log(selectedRecipe);
    return (
        <section id="details-page" className="details">
            <div className="recipe-information">
                <h3>{selectedRecipe.Name}</h3>
                <p className="type">Description:{selectedRecipe.Description}</p>
                <p className="img">
                    <img src={selectedRecipe.url} />
                </p>
                <div className="actions">
                    {/* Edit/Delete buttons ( Only for creator of this book )  */}
                    <a className="button" href="#">
                        Edit
                    </a>
                    <a className="button" href="#">
                        Delete
                    </a>
                    {/* Bonus */}
                    {/* Like button ( Only for logged-in users, which is not creators of the current book ) */}
                    <a className="button" href="#">
                        Like
                    </a>
                    {/* ( for Guests and Users )  */}
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    {/* Bonus */}
                </div>
            </div>
            <div className="book-description">
                <h3>Method:</h3>
                <p>
                    {selectedRecipe.Method}
                </p>
            </div>
        </section>
    )
};

export default DetailsPage;