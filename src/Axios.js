import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}/api/v1/`
});


/**
* Request Wrapper with default success/error actions
*/
export const apiCall = function (method, route, body = null, token = null) {

    const onSuccess = function (response) {
        return response.data;
    }

    const onError = function (error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client({
        method,
        url: route,
        data: body
    }).then(onSuccess)
        .catch(onError);
}