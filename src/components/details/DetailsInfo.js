import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import useGetLikesForCurrentUser from "../../hooks/useGetLikesForCurrentUser";
import { useDataContext } from "../../contexts/DataContext";
import useGetAllLikesRecipes from "../../hooks/useGetAllLikesRecipe";

const DetailsInfo = ({
    data,
    onEdit,
    onCloseEdit,
}) => {
    const { isAuthenticated, userId, token } = useAuthContext();
    const { onLikeRecipe } = useDataContext();
    const { likes, setLikes, loading } = useGetAllLikesRecipes(data._id);
    const { isLiked, setIsliked } = useGetLikesForCurrentUser(token, userId, data._id);

    const isOwner = userId === data._ownerId;
    const loggedUserNotOwner = isAuthenticated && !isOwner

    let onClickLikeRecipe = () => {
        return
    }
    if (!isLiked) {
        onClickLikeRecipe = () => {
            onLikeRecipe(data._id);
            setIsliked(true);
            setLikes(likes + 1);
        }
    }

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
                        <li><i className="fa-solid fa-heart"></i> Likes: {!loading && likes}</li>
                        <li><i className="fa-solid fa-user"></i> Created by: {data.author}</li>
                        <li><i className="fa-sharp fa-solid fa-bowl-food"></i> Category: {data.category}</li>
                        <li><i className="fa-sharp fa-solid fa-kitchen-set"></i> Dificulty level: {data.dificulty}</li>
                        <li><i className="fa-solid fa-clock"></i> Prepare time: {data.prepare}</li>
                        <li><i className="fa-solid fa-clock"></i> Cook: {data.cook}</li>
                        <li><i className="fa-solid fa-utensils"></i> Serves: {data.serves}</li>
                    </ul>
                    <div className="actions">
                        {isOwner && (
                            <>
                                <input type="submit" value="Edit" className="button" onClick={onEdit} />

                                <Link className="button" to={`/recipes/${data._id}/delete`}>
                                    Delete
                                </Link>
                            </>
                        )}

                        {loggedUserNotOwner && (
                            <>
                                <button
                                    className={`button ${isLiked && "btn__like__disabled"}`}
                                    onClick={onClickLikeRecipe}>
                                    Like
                                </button>
                                {isLiked && <p>You have alredy liked this recipe!</p>}
                            </>
                        )}

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