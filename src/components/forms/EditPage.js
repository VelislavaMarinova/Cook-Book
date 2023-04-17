import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useDataContext } from "../../contexts/DataContext";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import createValidationSchema from "../validations/createValidationSchema";

const EditPage = ({
    dataForEdit,
    setIsEditable,
    setOneRecipe,

}) => {
console.log('setOneRecipe',setOneRecipe);
    const { firstName, lastName } = useContext(AuthContext);
    const { onEditSubmit } = useDataContext();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: dataForEdit,
        resolver: yupResolver(createValidationSchema)
    })
    const onSubmit = (editedData) => {
        console.log("submit", editedData._id)
        onEditSubmit(editedData, setIsEditable(false))
        setOneRecipe(editedData)
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" className="edit__form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend className="edit__legend">Edit Recipe</legend>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="title">Recipe title:</label>
                        <span className="input">
                            <input
                                placeholder="Recipe title:"
                                {...register('title')}
                            />
                        </span>
                        {errors.title && <p className="register__errors">{errors.title.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="author">Created By:</label>
                        <span className="input">
                            <input
                                value={`${firstName} ${lastName}`}
                                readOnly
                                {...register('author')}
                            />
                        </span>
                        {errors.author && <p className="register__errors">{errors.author.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="type">Category</label>
                        <span className="input">
                            <select
                                className="edit__select"
                                placeholder="Choose category:"
                                {...register('category')}>
                                <option value="main-dishes">Main Dishes</option>
                                <option value="salads">Salads</option>
                                <option value="soups">Soups</option>
                                <option value="drinks">Drinks</option>
                                <option value="desserts">Dessterts</option>
                                <option value="quick">Quiqk Recipes</option>
                                <option value="healthy">Healthy Recipes</option>
                            </select>
                        </span>
                        {errors.category && <p className="register__errors">{errors.category.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="dificulty">Dificulty Level:</label>
                        <span className="input">
                            <select
                                className="edit__select"
                                placeholder="Dificulty Level:"
                                {...register('dificulty')}
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </span>
                        {errors.dificulty && <p className="register__errors">{errors.dificulty.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="prepare">Prepare time:</label>
                        <span className="input">
                            <input
                                placeholder="Prepare time:"
                                {...register('prepare')}
                            />
                        </span>
                        {errors.prepare && <p className="register__errors">{errors.prepare.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="cook">Cook time:</label>
                        <span className="input">
                            <input
                                placeholder="Cook time:"
                                {...register('cook')}
                            />
                        </span>
                        {errors.cook && <p className="register__errors">{errors.cook.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="serves">Serves:</label>
                        <span className="input">
                            <input
                                placeholder="Serves:"
                                {...register('serves')}
                            />
                        </span>
                        {errors.serves && <p className="register__errors">{errors.serves.message}</p>}

                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="description">Description:</label>
                        <span className="input">
                            <textarea
                                placeholder="Description:"
                                {...register('description')}
                            />
                        </span>
                        {errors.description && <p className="register__errors">{errors.description.message}</p>}

                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="description">Ingredients: use <span>"||"</span> to separate ingredients!</label>
                        <span className="input">
                            <textarea
                                placeholder="Example:sugar||butter||fruits||..."
                                {...register('ingredients')}
                            />
                        </span>
                        {errors.ingredients && <p className="register__errors">{errors.ingredients.message}</p>}

                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="image">Image:</label>
                        <span className="input">
                            <input
                                placeholder="Image:"
                                {...register('imageUrl')}
                            />
                        </span>
                        {errors.imageUrl && <p className="register__errors">{errors.imageUrl.message}</p>}
                    </div>
                    <div className="edit__field">
                        <label className="edit__label" htmlFor="description">Method: use <span>"||"</span> to separate each method step!</label>
                        <span className="input">
                            <textarea
                                placeholder="Example: Step 1||Step 2||Step 3||..."
                                {...register('method')}
                            />
                        </span>
                        {errors.method && <p className="register__errors">{errors.method.message}</p>}

                    </div>
                    <div className="addRecipe-buttons">
                        <input
                            className="button submit"
                            type="submit"
                        />
                        <button className="button close" onClick={() => setIsEditable(false)}>Close</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default EditPage;