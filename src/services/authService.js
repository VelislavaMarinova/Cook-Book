import { loginUrl, logoutUrl, registerUrl } from "../utils/urlUtils";
import { requestFactory } from "./requester"

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    const login = (email, password) =>
        request.post(loginUrl, { email, password });


    const logout = async (accessToken) => {
        try {
            const response = await fetch(logoutUrl, {
                headers: {
                    'X-Authorization': accessToken
                }
            });

            return response;
        } catch (error) {
           throw new Error(error)
        }
    };

   const register = (email, password,firstName,lastName) =>
        request.post(registerUrl, { email, password, firstName,lastName});

        return{
            login,
            register,
            logout,
        };
};