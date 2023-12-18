import { loginUrl, logoutUrl, registerUrl } from "../utils/urlUtils";
import { requestFactory } from "./requester"

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    const login = async (email, password) => {
        try {
            const response = await request.post(loginUrl, { email, password });
            if (response.message === "Login or password don't match") {
                throw new Error(response.message);
            }
            return response;
        } catch (error) {
            return error.message;
        }
    }

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

    const register = async (email, password, firstName, lastName) => {

        try {
            const response = await request.post(registerUrl, { email, password, firstName, lastName });
            if (response.message) {
                throw new Error(response.message)
            }
            return response;
        } catch (error) {
            return error.message;
        }

    };

    return {
        login,
        register,
        logout,
    };
};