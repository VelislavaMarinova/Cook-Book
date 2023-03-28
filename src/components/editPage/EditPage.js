import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import { recipeServiceFactory } from '../../services/recipeService'

const EditFormKeys = {
    Id: '_id',
    Title: 'name',
    Author: 'author',
    Description: 'description',
    Ingredients: 'ingredients',
    Image: 'imageUrl',
    Method: 'method',
};

const EditPage = ({
    onFormClose,
    onEditSubmit,
}) => {
    const { firstName, lastName } = useContext(AuthContext);
    const { recipeId } = useParams();
    const recipeService = useService(recipeServiceFactory);
    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm({
        [EditFormKeys.Id]: '',
        [EditFormKeys.Title]: '',
        [EditFormKeys.Author]: `${firstName} ${lastName}`,
        [EditFormKeys.Description]: '',
        [EditFormKeys.Ingredients]: '',
        [EditFormKeys.Image]: '',
        [EditFormKeys.Method]: '',
    }, onEditSubmit);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
            });
    }, [recipeId]);

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="" onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit Recipe</legend>
                    <p className="field">
                        <label htmlFor="title">Recipe title:</label>
                        <span className="input">
                            <input
                                type="text"
                                id="title"
                                placeholder="Recipe title:"
                                name={EditFormKeys.Title}
                                value={formValues.name}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="title">Created By:</label>
                        <span className="input">
                            <input
                                type="text"
                                id="createdBy"
                                placeholder="Created By:"
                                name={EditFormKeys.Author}
                                value={`${firstName} ${lastName}`}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description:</label>
                        <span className="input">
                            <textarea
                                id="description"
                                placeholder="Description:"
                                name={EditFormKeys.Description}
                                value={formValues[EditFormKeys.Description]}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Ingredients:</label>
                        <span className="input">
                            <textarea
                                id="description"
                                placeholder="Ingredients:"
                                name={EditFormKeys.Ingredients}
                                value={formValues[EditFormKeys.Ingredients]}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image:</label>
                        <span className="input">
                            <input
                                type="text"
                                id="image"
                                placeholder="Image:"
                                name={EditFormKeys.Image}
                                value={formValues[EditFormKeys.Image]}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Method:</label>
                        <span className="input">
                            <textarea
                                id="method"
                                placeholder="Method:"
                                name={EditFormKeys.Method}
                                value={formValues[EditFormKeys.Method]}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </p>
                    <div className="addRecipe-buttons">
                        <input
                            className="button submit"
                            type="submit"
                            defaultValue="Add Recipe"
                        />
                        <button className="button close" onClick={onFormClose}>Close</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
};

export default EditPage;