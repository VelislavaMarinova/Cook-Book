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
    console.log(initialValues.name);
    
    const [formValues, setFormValues] = useState(initialValues);
    // setFormValues(initialValues)
     console.log(formValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValues);
        }
    };

    
    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setFormValues(newValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
        changeValues,
    };
};
export default useForm;