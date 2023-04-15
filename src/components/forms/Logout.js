import { Navigate } from "react-router-dom";
import {  useEffect } from "react";
import { useAuthContext} from "../../contexts/AuthContext";

const Logout = () => {
    const { onLogout } =useAuthContext();
  
    useEffect(() => {
        onLogout()
    }, [onLogout])
    return (
        <Navigate to='/' />
    )
}

export default Logout;