import "./forms.css"
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

const Login = ({
  onFormClose,
}) => {

  const { onLoginSubmit } = useContext(AuthContext)


  const { formValues, onChangeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
    },
    onLoginSubmit);



  return (
    <section id="login-page" className="login">
      <form id="login-form" method="POST" onSubmit={onSubmit}>
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input
                type="text"
                name={LoginFormKeys.Email}
                id="email"
                placeholder="Email"
                value={formValues[LoginFormKeys.Email]}
                onChange={onChangeHandler} />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name={LoginFormKeys.Password}
                id="password"
                placeholder="Password"
                value={formValues[LoginFormKeys.Password]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <div className="login-buttons">
            <input className="button submit" type="submit" defaultValue="Login" />
            <button className="button close" type="button" onClick={onFormClose}>Close</button>

          </div>
        </fieldset>
      </form>
    </section>
  )
}
export default Login;