
import { Link } from "react-router-dom";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import {AuthContext} from "../../contexts/AuthContext";

import "./forms.css";

const RegisterFormKeys = {
  Email: 'email',
  FirstName: 'firstName',
  LastName: 'lastName',
  Password: 'password',
  RepeatPassword: 'confirmPass'
};

const Register = ({
  onFormClose
}) => {
  const { onRegisterSubmit } = useContext(AuthContext)
  const { formValues, onChangeHandler, onSubmit } = useForm({
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.FirstName]:'',
    [RegisterFormKeys.LastName]:'',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  }, onRegisterSubmit)

  return (
    <section id="register-page" className="register">
      <form id="register-form" action="" method="POST" onSubmit={onSubmit}>
        <fieldset>
          <legend>Register Form</legend>
          <p>Create your account. It's free and only takes a minute.</p>
          <p className="field">
            {/* <label htmlFor="email">Email</label> */}
            <span className="input">
              <input
                type="text"
                id="email"
                placeholder="Email:"
                name={RegisterFormKeys.Email}
                value={formValues[RegisterFormKeys.Email]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
      
          <p className="field">
            {/* <label htmlFor="firstName">First Name:</label> */}
            <span className="input">
              <input
                type="text"
                id="firstName"
                placeholder="First Name:"
                name={RegisterFormKeys.FirstName}
                value={formValues[RegisterFormKeys.FirstName]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <span className="input">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name:"
                name={RegisterFormKeys.LastName}
                value={formValues[RegisterFormKeys.LastName]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            {/* <label htmlFor="password">Password:</label> */}
            <span className="input">
              <input
                type="password"
                id="password"
                placeholder="Password:"
                name={RegisterFormKeys.Password}
                value={formValues[RegisterFormKeys.Password]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <p className="field">
            {/* <label htmlFor="repeat-pass">Repeat Password</label> */}
            <span className="input">
              <input
                type="password"
                id="repeat-pass"
                placeholder="Repeat Password:"
                name={RegisterFormKeys.RepeatPassword}
                value={formValues[RegisterFormKeys.RepeatPassword]}
                onChange={onChangeHandler}
              />
            </span>
          </p>
          <div className="register-bottons">

            <input
              className="button submit"
              type="submit"
             value="Register"
            />
            <button className="button close" onClick={onFormClose}>Close</button>
          </div>
          <p className="field">
            <span>If you already have profile click <Link to="/login">here</Link></span>
          </p>
        </fieldset>
      </form>
    </section>
  )
};
export default Register;