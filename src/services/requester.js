const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok !== true) {
            if (response.status === 403) {
            };

            const error = await response.json();
            throw new Error(error.message);
        };

        if (response.status === 204) {
            return response;
        } else {
          
            return response.json();
        };

    } catch (err) {
        throw new Error(err);
    };
}

function createOptions(method = 'get', data, token) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
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
    console.log(`del ${token}`);
    return await request(url, createOptions('delete',"",token));
};


export const requestFactory = (token) => {

    console.log(`requestFactory  ${token}`);
    return {
        get: get,
        post:post,
        put:put,
        del: del
    };
};