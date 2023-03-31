// const request = async (method, token, url, data) => {
//     const options = {};

//     if (method !== 'GET') {
//         options.method = method;

//         if (data) {
//             options.headers = {
//                 'content-type': 'application/json',
//             };

//             options.body = JSON.stringify(data);
//         }
//     }

//     if (token) {
//         options.headers = {
//             ...options.headers,
//             'X-Authorization': token,
//         };
//     }

//     const response = await fetch(url, options);

//     if (response.status === 204) {
//         return {};
//     }

//     const result = await response.json();

//     if (!response.ok) {
//         throw result;
//     }

//     return result;
// };

// export const requestFactory = (token) => {
//     return {
//         get: (url,data)=>request('GET',token,url,data),
//         post: (url,data)=>request('POST',token,url,data),
//         put: (url,data)=>request('PUT',token,url,data),
//         patch: (url,data)=>request('PATCH',token,url,data),
//         delete: (url,data)=>request('DELETE',token,url,data),
//     }
// };


// import{clearUserData,getUserData}from '../util.js';
import { useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";


const host = 'http://localhost:3030';
// const { token } = useContext(AuthContext)


async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            if (response.status == 403) {
            //    clearUserData("userData")
            };

            const error = await response.json();
            throw new Error(error.message);
        };

        if (response.status == 204) {
            return response;
        } else {
          
            return response.json();
        };

    } catch (err) {
        alert(err.message);
        throw err;
    };
}

function createOptions(method = 'get', data,token) {
    console.log(`createOptions  ${token}`);
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    // const localData = JSON.parse(localStorage.getItem('auth'));
    // let token;
    // console.log(localData);
    // if (localData !== null) {
    //   token = localData.accessToken;
    // }
   
    if (token != null) {
        console.log(`request ${token}`);
        options.headers['X-Authorization'] = token;
    };

    return options;
};

 async function get(url,token) {
    return await request(url, createOptions(token));
};

 async function post(url, data,token) {
    return await request(url, createOptions('post', data,token));
};

 async function put(url, data,token) {
    return await request(url, createOptions('put', data,token));
};

async function del(url,token) {
    return await request(url, createOptions('delete',token));
};


export const requestFactory = (token) => {
// if (token !== undefined){
//     return{

//     }
// }
    console.log(`requestFactory  ${token}`);
    return {
        get: get,
        post:post,
        put:put,
        // patch: (url,data)=>patch(token,url,data),
        delete: del
    }
};