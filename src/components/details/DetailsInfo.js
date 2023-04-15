import { useAuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom";


const DetailsInfo = ({
    data,
    setIsEditable,
}) => {
    setIsEditable(false)
    console.log();
    const { isAuthenticated, userId } = useAuthContext();

    const isOwner = userId === data._ownerId;
    const loggedUserNotOwner = isAuthenticated && !isOwner

    return (
        <section id="details-page" className="details">
            <h3 className='details__title'>{data.title}</h3>
            <p className="recipe__description">
                <span className='recipe__description__bold'>Description: </span>
                {data.description}
            </p>
            <div className='details__content'>

                <div className="recipe__info">
                    <div className="recipe__img">
                        <img src={data.imageUrl} alt="food_img" />
                    </div>
                    <ul className='recipe__fetures'>
                        <li><i className="fa-solid fa-heart"></i> Likes: 0</li>
                        <li><i className="fa-solid fa-user"></i> Created by: {data.author}</li>
                        <li><i className="fa-sharp fa-solid fa-bowl-food"></i> Category: {data.category}</li>
                        <li><i className="fa-sharp fa-solid fa-kitchen-set"></i> Dificulty level: {data.dificulty}</li>
                        <li><i className="fa-solid fa-clock"></i> Prepare time: {data.prepare}</li>
                        <li><i className="fa-solid fa-clock"></i> Cook: {data.cook}</li>
                        <li><i className="fa-solid fa-utensils"></i> Serves: {data.serves}</li>
                    </ul>
                    <div className="actions">
                        {/* Edit/Delete buttons ( Only for creator of this book )  */}
                        {isOwner && (
                            <>
                                <button className="button" onClick={()=>setIsEditable(true)}>Edit</button>
                                {/* <Link className="button" to={`/recipes/${data._id}/edit`}>
                                Edit
                            </Link> */}
                                <Link className="button" to={`/recipes/${data._id}/delete`}>
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
                        {data.ingredients?.map(x => <li key={x}>{x}</li>)}
                    </ul>
                </div>
                <div className="recipe__method">
                    <h3>Method steps:</h3>
                    <ol className='recipe__steps'>
                        {data.method?.map(x => <li className='recipe__step' key={x}>{x}</li>)}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default DetailsInfo;