import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address!").required("Please enter email address!"),
    password: yup.string().min(4).max(10).required("Please enter password!"),
});

export default loginSchema;