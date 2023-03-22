// import { useState } from "react";

// const useForm = (initialData, onSubmitHandler) => {
//     const [formData, setFormData] = useState(initialData);

//     const onChangeHandler = (e) => {
//         setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
//     };

//     const onSubmit = (e) => {
//         e.preventDefault()
//         console.log('submit');
//         onSubmitHandler(formData)
//     };

//     return {
//         formData,
//         onChangeHandler,
//         onSubmit,
//     };
// };
// export default useForm;

import { useState} from "react";

const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValues);
        }
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    };
};
export default useForm;