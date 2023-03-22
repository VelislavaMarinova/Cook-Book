import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";

const Logout = () => {
    const { onLogout } = useContext(AuthContext)
  
    useEffect(() => {
        onLogout()
    }, [])
    return (
        <Navigate to='/' />
    )
}

export default Logout;