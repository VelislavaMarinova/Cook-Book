import './comments.css'
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
// import DataContext from "../../contexts/DataContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from "../../services/recipeService";
import useSelectRecipe from "../../hooks/useSelectRecipe";

const DetailsPage = () => {
    // const recipes = useContext(DataContext);
    const { isAuthenticated, userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    // console.log(recipeId);
    const selectedRecipe = useSelectRecipe(recipeId);
    // console.log(selectedRecipe);

    // const [selectedRecipe, setSelectedRecipe] = useState({});
    // const recipeService = useService(recipeServiceFactory)


    // useEffect(() => {
    //     recipeService.getOne(recipeId)
    //         .then(result => {
    //             setSelectedRecipe(result);
    //         })
    // }, [recipeId]);

    //or getOne
    // const selectedRecipe = recipes.find(x => x._id === recipeId)
    // console.log(selectedRecipe);


    if (selectedRecipe) {
        // console.log(selectedRecipe);
        const isOwner = userId === selectedRecipe._ownerId;
        const loggedUserNotOwner = isAuthenticated && !isOwner
        // console.log(isOwner)
        // console.log(loggedUserNotOwner);
        return (
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3>{selectedRecipe.name}</h3>
                    <p className="type">Description: {selectedRecipe.description}</p>
                    <p className="img">
                        <img src={selectedRecipe.imageUrl} />
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
                        {selectedRecipe.ingredients}
                    </p>
                </div>
                <div className="book-description">
                    <h3>Method:</h3>
                    <p>
                        {selectedRecipe.method}
                    </p>
                </div>
                <div>
                    <h2>Comments:</h2>
                    <ul>
                        {/* {game.comments && Object.values(game.comments).map(x => (
                                <li key={x._id} className="comment">
                                    <p>{x.username}: {x.comment}</p>
                                </li>
                            ))} */}
                    </ul>

                    {/* {!Object.values(game.comments).length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                </div>
                <article className="create-comment">
                <label>Add new comment:</label>
                {/* onSubmit={onCommentSubmit} */}
                <form className="form" >
                {/* value={username} onChange={(e) => setUsername(e.target.value)} */}
                    <input type="text" name="username" placeholder='Пешо'  />
                    {/* value={comment} onChange={(e) => setComment(e.target.value)} */}
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

            </section>
        )
    };
}


export default DetailsPage;