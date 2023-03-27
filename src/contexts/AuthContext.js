import { createContext } from 'react';
import { authServiceFactory } from '../services/authService';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext()

// const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {})
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate()

    const onLoginSubmit = async (data) => {

        // console.log(data);
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            alert('incorrect Email or Password')
            // console.log('There is a problem');
        }
        // 1. Before useForm Hook,to try if it works
        // e.preventDefault();
        // console.log(Object.fromEntries((new FormData(e.target))));

    }
    const onRegisterSubmit = async (data) => {
        // console.log(data);
        const { confirmPass, ...registerData } = data;
        if (confirmPass !== registerData.password) {
            alert('Password and Repaet Password don\'t match!');
            return;
        }
        try {
            const result = await authService.register(registerData)
            // console.log(result);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            alert('problem')
        }
    };

    const onLogout = async () => {
        await authService.logout()
        setAuth({})
    };


    let authContextData = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };
     
    return (
        <>
            <AuthContext.Provider value={authContextData}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
