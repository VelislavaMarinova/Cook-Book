import "./forms.css"
import { Link } from "react-router-dom";
import { useContext,useEffect } from "react";
import {AuthContext} from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

const Login = () => {

  const { onLoginSubmit, onFormClose} = useContext(AuthContext)


  const { formValues, onChangeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
    },
    onLoginSubmit);

    

    // const detectKeyDown = (e) => {
    //   if (e.key === 'Escape') {
    //     onFormClose()
    //   }
    // };
  
    // useEffect(() => {
    //   document.addEventListener('keydown', detectKeyDown, true)
    // }, [detectKeyDown]);

  return (
    <section id="login-page" className="login">
      <form id="login-form" method="POST" onSubmit={onSubmit}>
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            {/* <label htmlFor="email">Email</label> */}
            <span className="input">
              <input
                type="text"
                name={LoginFormKeys.Email}
                id="email"
                placeholder="Email:"
                value={formValues[LoginFormKeys.Email]}
                onChange={onChangeHandler} />
            </span>
          </p>
          <p className="field">
            {/* <label htmlFor="password">Password</label> */}
            <span className="input">
              <input
                type="password"
                name={LoginFormKeys.Password}
                id="password"
                placeholder="Password:"
                value={formValues[LoginFormKeys.Password]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <div className="login-buttons">
            <input className="button submit" type="submit" value="Sign in" />
            <button className="button close" type="button" onClick={onFormClose}>Close</button>

          </div>
          <p className="field">
            <span>If you don't have profile click <Link to="/register">here</Link></span>
          </p>
        </fieldset>
      </form>
    </section>
  )
}
export default Login;