import { useParams ,useNavigate} from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";
import useSelectRecipe from "../../hooks/useSelectRecipe";
import { recipeServiceFactory } from "../../services/recipeService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";




const DeleteRecipe = () => {
    const { recipeId } = useParams();
    const selectedRecipe = useSelectRecipe(recipeId);
    const {token}=useContext(AuthContext);
    console.log(`DeleteRecipe ${token}`);
    const recipeService = recipeServiceFactory(token, "");
    const {deleteRecipeFromState}=useDataContext()
    const navigate=useNavigate()

    const onDeleteClik = async (recipeId) => {

        await recipeService.deleteRecipe(recipeId);

        deleteRecipeFromState(recipeId);

        navigate('/catalog');
    //     onDeleteClickHandler(userId);
    //    setSelectedRecipe(null);
    
    }
    const onClose=()=>{
        navigate(`/catalog/${recipeId}`)
    }

   
    return (
        <section id="delete" className="deleteRecipe">
            <fieldset>
                <legend>Delete Recipe</legend>
                <p>Are you shure that you want to delete {selectedRecipe.title} recipe?</p>

                <div className="login-buttons">
                    <button className="delete__btn  button" type="submit" onClick={() => onDeleteClik(selectedRecipe._id)}>Delete</button>
                    <button className="close__btn  button" type="button" onClick={onClose}>Cancel</button>

                </div>

            </fieldset>

        </section>
    )
};

export default DeleteRecipe