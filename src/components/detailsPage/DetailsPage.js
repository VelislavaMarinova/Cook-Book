import './comments.css'
import { Link, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from "../../services/recipeService";
import useSelectRecipe from "../../hooks/useSelectRecipe";

const DetailsPage = () => {
    ;
    const { isAuthenticated, userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    // console.log(recipeId);
    const selectedRecipe = useSelectRecipe(recipeId);
    // console.log(`und: ${selectedRecipe.ingredients}`);
    // console.log(selectedRecipe);

    // const [selectedRecipe, setSelectedRecipe] = useState({});
    // const recipeService = useService(recipeServiceFactory)


    // useEffect(() => {
    //     recipeService.getOne(recipeId)
    //     .then(result => {
    //         setSelectedRecipe(result);
    //     })
    // }, [recipeId]);

    if (selectedRecipe === undefined) {
        console.log('und');
    } else (
        console.log(`ingr ${selectedRecipe.ingredients}`)
        // selectedRecipe.ingredients?.map(x => console.log(x))
        // console.log('ok')

    )
    //or getOne
    // const selectedRecipe = recipes.find(x => x._id === recipeId)
    // console.log(selectedRecipe);

    if (selectedRecipe._id) {
        const step=0;
        // console.log('selected');
        // console.log(selectedRecipe);
        const isOwner = userId === selectedRecipe._ownerId;
        const loggedUserNotOwner = isAuthenticated && !isOwner
        //    const split= selectedRecipe.ingredients.split(', ')
        // console.log(`selected: ${selectedRecipe}`);
        // let ingredientsArr = JSON.parse(selectedRecipe.ingredients);
        // console.log(ingredientsArr)
        // console.log(isOwner)
        // console.log(loggedUserNotOwner);
        return (
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3>{selectedRecipe.title}</h3>
                    <p className="catgory">Category: {selectedRecipe.category}</p>
                    <p>Created by: {selectedRecipe.author}</p>
                    <p className="description">Description: {selectedRecipe.description}</p>
                    <p className="dificulty">Dificulty level: {selectedRecipe.dificulty} </p>
                    <p className="prepare">Prepare time: {selectedRecipe.prepare} </p>
                    <p className="cook">Cook: {selectedRecipe.cook} </p>
                    <p className="cook">Serves: {selectedRecipe.serves} </p>
                    <p className="img">
                        <img src={selectedRecipe.imageUrl} />
                    </p>

                    <div className="actions">
                        {/* Edit/Delete buttons ( Only for creator of this book )  */}
                        {isOwner && (<>
                            <Link className="button" to={`/recipes/${recipeId}/edit`}>
                                Edit
                            </Link>
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
                        {selectedRecipe.ingredients?.map(x => <li key={x}>{x}</li>)}
                    </p>
                </div>
                <div className="book-description">
                    <h3>Method steps:</h3>
                    <ol>
                        {selectedRecipe.method.map(x=><li key={x}>{x}</li>)}
                    </ol>
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
                {isAuthenticated &&(
                <article className="create-comment">
                    <label>Add new comment:</label>
                    {/* onSubmit={onCommentSubmit} */}
                    <form className="form" >
                        {/* value={username} onChange={(e) => setUsername(e.target.value)} */}
                        <input type="text" name="username" placeholder='Пешо' />
                        {/* value={comment} onChange={(e) => setComment(e.target.value)} */}
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

                )}

            </section>
        )
    };
}


export default DetailsPage;