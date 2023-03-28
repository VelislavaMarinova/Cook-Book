import "./forms.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const CreateFormKeys = {
  Title: 'name',
  Author: 'author',
  Description: 'description',
  Ingredients: 'ingredients',
  Image: 'imageUrl',
  Method: 'method',
};

const CreatePage = ({
  onFormClose,
  onCreateSubmit,
}) => {
  const{firstName,lastName}=useContext(AuthContext);
  // return
  // const{onCreateSubmit}=useContext(AuthContext)

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      [CreateFormKeys.Title]: '',
      [CreateFormKeys.Author]:`${firstName} ${lastName}`,
      [CreateFormKeys.Description]: '',
      [CreateFormKeys.Ingredients]: '',
      [CreateFormKeys.Image]: '',
      [CreateFormKeys.Method]: '',
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
                defaultValue={`${firstName} ${lastName}`}
                // onChange={onChangeHandler}
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
            <label htmlFor="description">Ingredients:</label>
            <span className="input">
              <textarea
                id="description"
                placeholder="Ingredients:"
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
            <label htmlFor="description">Method:</label>
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