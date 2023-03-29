const request = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const requestFactory = (token) => {
    return {
        get: (url,data)=>request('GET',token,url,data),
        post: (url,data)=>request('POST',token,url,data),
        put: (url,data)=>request('PUT',token,url,data),
        patch: (url,data)=>request('PATCH',token,url,data),
        delete: (url,data)=>request('DELETE',token,url,data),
    }
};
