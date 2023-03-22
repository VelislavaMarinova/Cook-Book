import { useParams } from "react-router-dom"
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import AuthContext from "../../contexts/AuthContext";

const DetailsPage = () => {
    const recipes = useContext(DataContext);
    const { isAuthenticated, userId } = useContext(AuthContext)
    const { recipeId } = useParams()
    const selectedRecipe = recipes.find(x => x._id === recipeId)
    console.log(selectedRecipe);


    if (selectedRecipe) {
        const isOwner = userId === selectedRecipe._ownerId;
        const loggedUserNotOwner = isAuthenticated && !isOwner
        console.log(isOwner)
        console.log(loggedUserNotOwner);
        return (
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3>{selectedRecipe.Name}</h3>
                    <p className="type">Description: {selectedRecipe.Description}</p>
                    <p className="img">
                        <img src={selectedRecipe.url} />
                    </p>
                    <div className="actions">
                        {/* Edit/Delete buttons ( Only for creator of this book )  */}
                        {isOwner && (<>
                            <a className="button" href="#">
                                Edit
                            </a>
                            <a className="button" href="#">
                                Delete
                            </a>
                        </>
                        )}

                        {/* Bonus */}
                        {/* Like button ( Only for logged-in users, which is not creators of the current book ) */}
                        {loggedUserNotOwner && (

                            <a className="button" href="#">
                                Like
                            </a>
                        )}
                        {/* ( for Guests and Users )  */}
                        {!isAuthenticated && (

                            <div className="likes">
                                <img className="hearts" src="/images/heart.png" />
                                <span id="total-likes">Likes: 0</span>
                            </div>
                        )}
                        {/* Bonus */}
                    </div>
                </div>
                <div className="book-description">
                    <h3>Ingredients:</h3>
                    <p>
                        {selectedRecipe.Ingredients}
                    </p>
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
}


export default DetailsPage;