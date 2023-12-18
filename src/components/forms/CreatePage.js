import "./forms.css";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from "../../contexts/AuthContext";
import createValidationSchema from '../validations/createValidationSchema'
import { useDataContext } from "../../contexts/DataContext";

const CreatePage = ({categories}) => {
  const { onCreateSubmit } = useDataContext();
  const { firstName, lastName, onFormClose } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createValidationSchema)
  })

  const submitForm = (data) => {
    onCreateSubmit(data);
    
  }

  return (
    <section id="create-page" className="create" >
      <form id="create-form" className="create__form" onSubmit={handleSubmit(submitForm)} >
        <fieldset>
          <legend className="create__legend">Add new Recipe</legend>
          <div className="create__field">
            <label className="create__label" htmlFor="title">Recipe title:</label>
            <span className="input">
              <input
                placeholder="Recipe title:"
                {...register('title')}
         
              />
            </span>
            {errors.title && <p className="login__errors">{errors.title.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="author">Created By:</label>
            <span className="input">
              <input
                placeholder="Created By:"
                defaultValue={`${firstName} ${lastName}`}
                readOnly
                {...register('author')}
              />
            </span>
            {errors.author && <p className="login__errors">{errors.author.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="category">Category: </label>
            <span className="input">
              <select
                className="create__select"
                {...register('category')}
              >
                <option value="choose-category">Choose category:</option>
                 {categories?.map(category => <option key={category._id} value={category.value}>{category.name}</option>)}
              </select>
            </span>
            {errors.category && <p className="login__errors">{errors.category.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="dificulty">Dificulty Level:</label>
            <span className="input">
              <select
                className="create__select"
                {...register('dificulty')}
              >
                <option value="choose-dificulty">Choose dificulty level:</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </span>
            {errors.dificulty && <p className="login__errors">{errors.dificulty.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="prepare">Prepare time:</label>
            <span className="input">
              <input
                placeholder="Prepare time:"
                {...register('prepare')}
              />
            </span>
            {errors.prepare && <p className="login__errors">{errors.prepare.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="cook">Cook time:</label>
            <span className="input">
              <input
                type="text"
                placeholder="Cook time:"
                {...register('cook')}
              />
            </span>
            {errors.cook && <p className="login__errors">{errors.cook.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="serves">Serves:</label>
            <span className="input">
              <input
                placeholder="Serves:"
                {...register('serves')}
              />
            </span>
            {errors.serves && <p className="login__errors">{errors.serves.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Description:</label>
            <span className="input">
              <textarea
                placeholder="Description:"
                {...register('description')}
              />
            </span>
            {errors.description && <p className="login__errors">{errors.description.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Ingredients: use <span>"||"</span> to separate ingredients!</label>
            <span className="input">
              <textarea
                placeholder="Example:sugar||butter||fruits||..."
                {...register('ingredients')}
              />
            </span>
            {errors.ingredients && <p className="login__errors">{errors.ingredients.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="image">Image:</label>
            <span className="input">
              <input
                placeholder="Image:"
                {...register('imageUrl')}
              />
            </span>
            {errors.imageUrl && <p className="login__errors">{errors.imageUrl.message}</p>}
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Method: use <span>"||"</span> to separate each method step!</label>
            <span className="input">
              <textarea
                placeholder="Example: Step 1||Step 2||Step 3||..."
                {...register('method')}
              />
            </span>
            {errors.method && <p className="login__errors">{errors.method.message}</p>}
          </div>
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

export default CreatePage;