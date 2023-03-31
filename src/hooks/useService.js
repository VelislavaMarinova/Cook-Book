
import { useContext } from "react";
import  {AuthContext}  from "../contexts/AuthContext";

export const useService = (serviceFactory) => {
    
    const { token } = useContext(AuthContext);
    
    console.log(token);

    const service = serviceFactory(token);

    return service;
};
