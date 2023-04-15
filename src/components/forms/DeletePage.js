import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";
import useSelectRecipe from "../../hooks/useSelectRecipe";
import { recipeServiceFactory } from "../../services/recipeService";
import { useAuthContext } from "../../contexts/AuthContext";




const DeletePage = () => {
    const { recipeId } = useParams();
    console.log(recipeId, 'delete' );
    const { token } = useAuthContext();
    const { selectedRecipe, loading }= useSelectRecipe(recipeId);
    // console.log(`DeleteRecipe ${token}`);
    const recipeService = recipeServiceFactory(token);
    const { deleteRecipeFromState } = useDataContext()
    const navigate = useNavigate()
    
    if(loading){
        return <div>Loading</div>
    }
    const onDeleteClik = async (recipeId) => {
        
        await recipeService.deleteRecipe(recipeId);
        
        deleteRecipeFromState(recipeId);

        navigate('/catalog');
        //     onDeleteClickHandler(userId);
        //    setSelectedRecipe(null);

    }
    const onClose = () => {
        navigate(`/catalog/${recipeId}`)
    }


    return (
        <section id="delete" className="deleteRecipe">
            <fieldset>
                <legend className="deleteRecipe__legend">Delete Recipe</legend>
                <p>Are you shure that you want to delete {selectedRecipe.title} recipe?</p>

                <div className="login-buttons">
                    <button className="delete__btn  button" type="submit" onClick={() => onDeleteClik(selectedRecipe._id)}>Delete</button>
                    <button className="close__btn  button" type="button" onClick={onClose}>Cancel</button>
                </div>
            </fieldset>
        </section>
    )
};

export default DeletePage