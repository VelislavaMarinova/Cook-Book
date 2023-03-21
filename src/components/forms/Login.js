import "./forms.css"
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
const Login=({
  onFormClose,
})=>{
  const {onLoginSubmit}=useContext(AuthContext)
    return(
        <section id="login-page" className="login">
        <form id="login-form" action="" method="" onSubmit={onLoginSubmit}>
          <fieldset>
            <legend>Login Form</legend>
            <p className="field">
              <label htmlFor="email">Email</label>
              <span className="input">
                <input type="text" name="email" id="email" placeholder="Email" />
              </span>
            </p>
            <p className="field">
              <label htmlFor="password">Password</label>
              <span className="input">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </span>
            </p>
            <div className="login-buttons">
            <input className="button submit" type="submit" defaultValue="Login" />
            <button className="button close" onClick={onFormClose}>Close</button>

            </div>
          </fieldset>
        </form>
      </section>
    )
}
export default Login;