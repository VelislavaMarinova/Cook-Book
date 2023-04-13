import "./forms.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useDataContext } from "../../contexts/DataContext";


const CreateFormKeys = {
  Title: 'title',
  Author: 'author',
  Description: 'description',
  Ingredients: 'ingredients',
  Image: 'imageUrl',
  Method: 'method',
  PrepareTime: 'prepare',
  CookTime: 'cook',
  Category: 'category',
  Dificulty: 'dificulty',
  Serves: 'serves',
};

const CreatePage = () => {

  const { onCreateSubmit } = useDataContext();
  const { firstName, lastName, onFormClose } = useContext(AuthContext);
  // console.log(firstName, lastName);
  // return
  // const{onCreateSubmit}=useContext(AuthContext)

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      [CreateFormKeys.Title]: '',
      [CreateFormKeys.Author]: `${firstName} ${lastName}`,
      [CreateFormKeys.Description]: '',
      [CreateFormKeys.Ingredients]: '',
      [CreateFormKeys.Image]: '',
      [CreateFormKeys.Method]: '',
      [CreateFormKeys.PrepareTime]: '',
      [CreateFormKeys.CookTime]: '',
      [CreateFormKeys.Dificulty]: '',
      [CreateFormKeys.Category]: '',
      [CreateFormKeys.Serves]: '',

    },
    onCreateSubmit)

  return (
    <section id="create-page" className="create" >
      <form id="create-form" className="create__form" onSubmit={onSubmit} >
        <fieldset>
          <legend className="create__legend">Add new Recipe</legend>
          <div className="create__field">
            <label className="create__label" htmlFor="title">Recipe title:</label>
            <span className="input">
              <input
                type="text"
                id="title"
                placeholder="Recipe title:"
                name={CreateFormKeys.Title}
                value={formValues[CreateFormKeys.Title]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="author">Created By:</label>
            <span className="input">
              <input
                type="text"
                id="author"
                placeholder="Created By:"
                name={CreateFormKeys.Author}
                defaultValue={`${firstName} ${lastName}`}
                // onChange={onChangeHandler}
                readOnly
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="category">Category: </label>
            <span className="input">
              <select className="create__select" id="category" name={CreateFormKeys.Category} value={formValues.category} onChange={onChangeHandler}>
                <option value="choose-category">Choose category:</option>
                <option value="main-dishes">Main Dishes</option>
                <option value="salads">Salads</option>
                <option value="soups">Soups</option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Dessterts</option>
                <option value="quick-recipes">Quiqk Recipes</option>
                <option value="healthy-recipes">Healthy Recipes</option>
              </select>
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="dificulty">Dificulty Level:</label>
            <span className="input">
              <select className="create__select" id="dificulty" name={CreateFormKeys.Dificulty} value={formValues.dificulty} onChange={onChangeHandler}>
                <option value="choose-dificulty">Choose dificulty level:</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="prepare">Prepare time:</label>
            <span className="input">
              <input
                type="text"
                id="prepare"
                placeholder="Prepare time:"
                name={CreateFormKeys.PrepareTime}
                value={formValues[CreateFormKeys.PrepareTime]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="cook">Cook time:</label>
            <span className="input">
              <input
                type="text"
                id="cook"
                placeholder="Cook time:"
                name={CreateFormKeys.CookTime}
                value={formValues[CreateFormKeys.CookTime]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="serves">Serves:</label>
            <span className="input">
              <input
                type="text"
                id="serves"
                placeholder="Serves:"
                name={CreateFormKeys.Serves}
                value={formValues[CreateFormKeys.Serves]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Description:</label>
            <span className="input">
              <textarea
                id="description"
                placeholder="Description:"
                name={CreateFormKeys.Description}
                value={formValues[CreateFormKeys.Description]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Ingredients: use <span>"||"</span> to separate ingredients!</label>
            <span className="input">
              <textarea
                id="description"
                placeholder="Example:sugar||butter||fruits||..."
                name={CreateFormKeys.Ingredients}
                value={formValues[CreateFormKeys.Ingredients]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="image">Image:</label>
            <span className="input">
              <input
                type="text"
                id="image"
                placeholder="Image:"
                name={CreateFormKeys.Image}
                value={formValues[CreateFormKeys.Image]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          <div className="create__field">
            <label className="create__label" htmlFor="description">Method: use <span>"||"</span> to separate each method step!</label>
            <span className="input">
              <textarea
                id="method"
                placeholder="Example: Step 1||Step 2||Step 3||..."
                name={CreateFormKeys.Method}
                value={formValues[CreateFormKeys.Method]}
                onChange={onChangeHandler}
              />
            </span>
          </div>
          {/* <p className="field">
              <label htmlFor="type">Type</label>
              <span className="input">
                <select id="type" name="type">
                  <option value="Fiction">Fiction</option>
                  <option value="Romance">Romance</option>
                  <option value="Mistery">Mistery</option>
                  <option value="Classic">Clasic</option>
                  <option value="Other">Other</option>
                </select>
              </span>
            </p> */}
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