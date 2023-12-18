import { createContext, useContext } from 'react';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [errLogin, setErrLogin] = useState('');
    const [errRegister, setErrRegister] = useState('');
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate();

    const removeErrorLogin=()=>{
        setErrLogin('')
    }
    const removeErrorRegister=()=>{
        setErrRegister('')
    }

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data.email, data.password);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            setErrLogin(err)
            setErrRegister('')
            throw new Error(err)
        }
    }
    const onRegisterSubmit = async (data) => {
        try {
            const result = await authService.register(data.email, data.password, data.firstName, data.lastName)
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            setErrRegister(err);
            setErrLogin('');
            throw new Error(err);
        }
    };

    const onLogout = async () => {
        await authService.logout(auth.accessToken)
        setAuth({})
    };
    const onFormClose = () => {
        navigate('/');
        setErrLogin('');
        setErrRegister('')
    };

    let authContextData = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onFormClose,
        userId: auth._id,
        firstName: auth.firstName,
        lastName: auth.lastName,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        errorLogin: errLogin,
        removeErrorLogin,
        errorRegister: errRegister,
        removeErrorRegister,
    };

    return (
        <>
            <AuthContext.Provider value={authContextData}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};