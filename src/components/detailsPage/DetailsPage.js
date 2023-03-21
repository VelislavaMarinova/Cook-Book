import {useparams} from "react-router-dom"
const DetailsPage = ({
    recipes
}) => {
    const{recipeId}=useparams()
    const selectedRecipe=recipes.find(x=>x_id===recipeId)
    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>A Court of Thorns and Roses</h3>
                <p className="type">Type: Fiction</p>
                <p className="img">
                    <img src="/images/book1.png" />
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
                <h3>Description:</h3>
                <p>
                    Feyre's survival rests upon her ability to hunt and kill – the forest
                    where she lives is a cold, bleak place in the long winter months. So
                    when she spots a deer in the forest being pursued by a wolf, she cannot
                    resist fighting it for the flesh. But to do so, she must kill the
                    predator and killing something so precious comes at a price ...
                </p>
            </div>
        </section>
    )
};

export default DetailsPage;