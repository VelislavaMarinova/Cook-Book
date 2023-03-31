import "./forms.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DataContext from "../../contexts/DataContext";


const CreateFormKeys = {
  Title: 'name',
  Author: 'author',
  Description: 'description',
  Ingredients: 'ingredients',
  Image: 'imageUrl',
  Method: 'method',
  PrepareTime:'prepare-time',
  CookTime:'cook-time',
  Type: 'type',
  Dificulty:'dificulty',
  Serves: 'serves',
};

const CreatePage = () => {

  const { onCreateSubmit } = useContext(DataContext)
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
      [CreateFormKeys.CookTime]:'',
      [CreateFormKeys.Dificulty]: '',
      [CreateFormKeys.Type]:'',
      [CreateFormKeys.Serves]:'',

    },
    onCreateSubmit)

  return (
    <section id="create-page" className="create" >
      <form id="create-form" method="POST" onSubmit={onSubmit} >
        <fieldset>
          <legend>Add new Recipe</legend>
          <p className="field">
            <label htmlFor="title">Recipe title:</label>
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
          </p>
          <p className="field">
            <label htmlFor="title">Created By:</label>
            <span className="input">
              <input
                type="text"
                id="createdBy"
                placeholder="Created By:"
                name={CreateFormKeys.Author}
                value={`${firstName} ${lastName}`}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select id="type" name="type" value={formValues.type} onChange={onChangeHandler}>
                <option value="main-dishes">Main Dishes</option>
                <option value="salads">Salads</option>
                <option value="soups">Soups</option>
                <option value="soups">Drinks</option>
                <option value="quick">Quiqk Recipes</option>
                <option value="healthy">Healthy Recipes</option>
              </select>
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Dificulty Level:</label>
            <span className="input">
              <select id="dificulty" name="dificulty"  value={formValues.dificulty} onChange={onChangeHandler}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </span>
          </p>
          <p className="field">
            <label htmlFor="prepare-time">Prepare time:</label>
            <span className="input">
              <input
                type="text"
                id="prepare-time"
                placeholder="Prepare time:"
                name={CreateFormKeys.PrepareTime}
                value={formValues[CreateFormKeys.PrepareTime]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="cook-time">Cook time:</label>
            <span className="input">
              <input
                type="text"
                id="cook-time"
                placeholder="Cook time:"
                name={CreateFormKeys.CookTime}
                value={formValues[CreateFormKeys.CookTime]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="serves">Serves:</label>
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
          </p>
          <p className="field">
            <label htmlFor="description">Description:</label>
            <span className="input">
              <textarea
                id="description"
                placeholder="Description:"
                name={CreateFormKeys.Description}
                value={formValues[CreateFormKeys.Description]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Ingredients: use <span>"||"</span> to separate ingredients!</label>
            <span className="input">
              <textarea
                id="description"
                placeholder="Example: 200g dark muscovado sugar||175g butter, chopped||700g luxury mixed dried fruit"
                name={CreateFormKeys.Ingredients}
                value={formValues[CreateFormKeys.Ingredients]}
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
                name={CreateFormKeys.Image}
                value={formValues[CreateFormKeys.Image]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Method: use <span>"||"</span> to separate each method step!</label>
            <span className="input">
              <textarea
                id="method"
                placeholder="Method:"
                name={CreateFormKeys.Method}
                value={formValues[CreateFormKeys.Method]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
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