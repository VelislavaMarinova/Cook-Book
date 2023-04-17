import { requestFactory } from "./requester"

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    const baseUrl = '/users';

    const login = (email, password) =>
        request.post(`${baseUrl}/login`, { email, password });


    const logout = async (accessToken) => {
        try {
            const response = await fetch(`${baseUrl}/logout`, {
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
        request.post(`${baseUrl}/register`, { email, password, firstName,lastName});

        return{
            login,
            register,
            logout,
        };
};