
import { useEffect } from "react";
import "./forms.css";

const Register = ({
  onClose
}) => {


  return (
    <section id="register-page" className="register">
      <form id="register-form" action="" method="">
        <fieldset>
          <legend>Register Form</legend>
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
          <p className="field">
            <label htmlFor="repeat-pass">Repeat Password</label>
            <span className="input">
              <input
                type="password"
                name="confirm-pass"
                id="repeat-pass"
                placeholder="Repeat Password"
              />
            </span>
          </p>
          <div className="register-bottons">

            <input
              className="button submit"
              type="submit"
              defaultValue="Register"
            />
            <button className="button close" onClick={onClose}>Close</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
};
export default Register;