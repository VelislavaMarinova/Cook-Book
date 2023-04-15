// import { requestFactory } from './requester';

// const baseUrl = `http://localhost:3030/users`;

// export const authServiceFactory = (token) => {
//     const request = requestFactory(token);

//     return {
//         login: (data) => request.post(`${baseUrl}/login`, data),
//         register: (data) => request.post(`${baseUrl}/register`, data),
//         logout: () => request.get(`${baseUrl}/logout`),
//     }
// };

import { requestFactory } from "./requester"

// const request=useService(requestFactory)

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
            console.log(error);
        }
    };

   const register = (email, password,firstName,lastName) =>
        request.post(`${baseUrl}/register`, { email, password, firstName,lastName});

        return{
            login,
            register,
            logout,
        }
};