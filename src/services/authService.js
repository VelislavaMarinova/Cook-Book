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

    const register = async (email, password, firstName, lastName) => {

        try {
            const response = await request.post(registerUrl, { email, password, firstName, lastName });
            if (response.toString() === "Error: A user with the same email already exists") {
                throw new Error(response.toString())
            }
            return response;
        } catch (error) {
            return error;
        }

    };

    return {
        login,
        register,
        logout,
    };
};