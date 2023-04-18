
import "./forms.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from "../validations/registerValidation";

const Register = () => {
  const { onRegisterSubmit, onFormClose, errorRegister } = useAuthContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data) => {
    onRegisterSubmit(data);
  };

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
                placeholder="Email: email@email.com"
                {...register("email")}
              />
            </span>
            {errors.email && <p className="register__errors">{errors.email.message}</p>}
          </div>

          <div className="register__field">
            <label className="register__label" htmlFor="firstName">First Name:</label>
            <span className="input">
              <input
                placeholder="First Name:"
                {...register("firstName")}
              />
            </span>
            {errors.firstName && <p className="register__errors">{errors.firstName.message}</p>}
          </div>
          <div className="register__field">
            <label className="register__label" htmlFor="lastName">Last Name:</label>
            <span className="input">
              <input
                placeholder="Last Name:"
                {...register("lastName")}
              />
            </span>
            {errors.lastName && <p className="register__errors">{errors.lastName.message}</p>}
          </div>
          <div className="register__field">
            <label className="register__label" htmlFor="password">Password:</label>
            <span className="input">
              <input
                type="password"
                placeholder="Password:"
                {...register("password")}
              />
            </span>
            {errors.password && <p className="register__errors">{errors.password.message}</p>}
          </div>
          <div className="register__field">
            <label className="register__label" htmlFor="repeat-pass">Repeat Password:</label>
            <span className="input">
              <input
                type="password"
                placeholder="Repeat Password:"
                {...register("confirmPass")}
              />
            </span>
            {errors.confirmPass && <p className="register__errors">{errors.confirmPass.message}</p>}
          </div>
          {errorRegister ? <p className="register__errors">{errorRegister.message}</p> : null}
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
  );
};

export default Register;