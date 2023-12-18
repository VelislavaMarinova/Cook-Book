import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address!").required("Please enter email address!"),
    password: yup.string().min(4,'Password must be at least 4 characters!').max(10,'Password should not exceed 10 characters!').required("Please enter password!"),
});

export default loginSchema;