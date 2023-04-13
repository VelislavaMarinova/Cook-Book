
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from "../validations/registerValidation";
import "./forms.css";

const Register = () => {
  const { onRegisterSubmit, onFormClose, error } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    onRegisterSubmit(data)

  }

  return (
    <section id="register-page" className="register">
      <form id="register-form" className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="register__legend">Register Form</legend>
          <p>Create your account. It's free and only takes a minute.</p>
          <div className="register__field">
          <label className="register__label" htmlFor="email">Email:</label>
          <span className="input">
            <input
              type="text"
              id="email"
              placeholder="Email: email@email.com"
              name="email"
              {...register("email")}
            // value={formValues[RegisterFormKeys.Email]}
            // onChange={onChangeHandler}
            />
          </span>
          {errors.email && <p className="register__errors">{errors.email.message}</p>}
          </div>

          <div className="register__field">
          <label className="register__label" htmlFor="firstName">First Name:</label>
          <span className="input">
            <input
              type="text"
              id="firstName"
              placeholder="First Name:"
              name="firstName"
              {...register("firstName")}
            // value={formValues[RegisterFormKeys.FirstName]}
            // onChange={onChangeHandler}
            />
          </span>
          {errors.firstName && <p className="register__errors">{errors.firstName.message}</p>}
          </div>
          <div className="register__field">
          <label className="register__label" htmlFor="lastName">Last Name:</label>
          <span className="input">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name:"
              name="lastName"
              {...register("lastName")}
            // value={formValues[RegisterFormKeys.LastName]}
            // onChange={onChangeHandler}
            />
          </span>
          {errors.lastName && <p className="register__errors">{errors.lastName.message}</p>}
          </div>
          <div className="register__field">
          <label className="register__label" htmlFor="password">Password:</label>
          <span className="input">
            <input
              type="password"
              id="password"
              placeholder="Password:"
              name="password"
              {...register("password")}
            // value={formValues[RegisterFormKeys.Password]}
            // onChange={onChangeHandler}
            />
          </span>
          {errors.password && <p className="register__errors">{errors.password.message}</p>}
          </div>
          <div className="register__field">
          <label className="register__label" htmlFor="repeat-pass">Repeat Password:</label>
          <span className="input">
            <input
              type="password"
              id="confirmPass"
              placeholder="Repeat Password:"
              name="confirmPass"
              {...register("confirmPass")}
            // value={formValues[RegisterFormKeys.RepeatPassword]}
            // onChange={onChangeHandler}
            />
          </span>
          {errors.confirmPass && <p className="register__errors">{errors.confirmPass.message}</p>}
          </div>
          {error? <p className="register__errors">{error.message}</p> : null}
          <div className="register-bottons">

            <input className="button submit" type="submit" value="Register" />
            <button className="button close" onClick={onFormClose}>Close</button>
          </div>
          <div className="register__alredyHaveProfile">
            <span>If you already have profile <Link to="/login">click here</Link></span>
          </div>
        </fieldset>
      </form>
    </section>
  )
};
export default Register;