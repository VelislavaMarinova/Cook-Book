import './DetailsPage.css'
import { Link, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
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

    // if (selectedRecipe === undefined) {
    //     // console.log('und');
    // } else (
    //     // console.log(`ingr ${selectedRecipe.ingredients}`)
    //     // selectedRecipe.ingredients?.map(x => console.log(x))
    //     // console.log('ok')

    // )
    //or getOne
    // const selectedRecipe = recipes.find(x => x._id === recipeId)
    // console.log(selectedRecipe);

    if (selectedRecipe._id) {
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
                <h3 className='details__title'>{selectedRecipe.title}</h3>
                <p className="recipe__description">
                    <span className='recipe__description__bold'>Description:</span>
                    {selectedRecipe.description}
                </p>
                <div className='details__content'>

                    <div className="recipe__info">
                        <div className="recipe__img">
                            <img src={selectedRecipe.imageUrl} alt="food_img" />
                        </div>
                        <ul className='recipe__fetures'>
                            <li><i class="fa-solid fa-heart"></i> Likes: 0</li>
                            <li><i class="fa-solid fa-user"></i> Created by: {selectedRecipe.author}</li>
                            <li><i class="fa-sharp fa-solid fa-bowl-food"></i> Category: {selectedRecipe.category}</li>
                            <li><i class="fa-sharp fa-solid fa-kitchen-set"></i> Dificulty level: {selectedRecipe.dificulty}</li>
                            <li><i class="fa-solid fa-clock"></i> Prepare time: {selectedRecipe.prepare}</li>
                            <li><i class="fa-solid fa-clock"></i> Cook: {selectedRecipe.cook}</li>
                            <li><i class="fa-solid fa-utensils"></i> Serves: {selectedRecipe.serves}</li>
                        </ul>


                        <div className="actions">
                            {/* Edit/Delete buttons ( Only for creator of this book )  */}
                            {isOwner && (<>
                                <Link className="button" to={`/recipes/${recipeId}/edit`}>
                                    Edit
                                </Link>
                                <Link className="button" to={`/recipes/${recipeId}/delete`}>
                                    Delete
                                </Link>
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


                            {/* <div className="likes">
                                    <img className="hearts" src="/images/heart.png" />
                                    <span id="total-likes">Likes: 0</span>
                                </div> */}

                            {/* Bonus */}
                        </div>
                    </div>
                    <div className="recipe__allIngredients">
                        <h3>Ingredients:</h3>
                        <ul className='recipe__ingredients'>
                            {selectedRecipe.ingredients?.map(x => <li key={x}>{x}</li>)}
                        </ul>
                    </div>
                    <div className="recipe__method">
                        <h3>Method steps:</h3>
                        <ol className='recipe__steps'>
                            {selectedRecipe.method.map(x => <li key={x}>{x}</li>)}
                        </ol>
                    </div>

                </div>

            </section>
        )

    };
}


export default DetailsPage;

