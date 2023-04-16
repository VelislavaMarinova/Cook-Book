import * as yup from 'yup';

const registerSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email address!").required("Please enter email address!"),
    firstName: yup.string().required("Please enter First Name"),
    lastName: yup.string().required("Please enter Last Name"),
    password: yup.string().min(4).max(10).required("Please enter password!"),
    confirmPass:  yup.string().oneOf([yup.ref("password"),null], "Passwords don't match!").required("Please repeat password!")
  });

  export default registerSchema;