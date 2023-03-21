import { useState } from "react";

const useForm = (initialData, onSUbmitHandler) => {
    const [formData, setFormData] = useState(initialData);

    const onChangeHandler = (e) => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit=(e)=>{
        e.preventDefault()
        onSUbmitHandler(formData)
    }

    return {
        formData,
        onChangeHandler,
        onSubmit,

    };
};
export default useForm;