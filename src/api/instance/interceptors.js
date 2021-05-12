import { API_URL } from 'react-native-dotenv';

const apiInterceptor = instance => {
    // Interceptors
    instance.interceptors.request.use(
        async config => {
            config.baseURL = API_URL;
            return config;
        },
        error => {
            console.log('Error in request: ', error);
            // Do something with request error
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        async response => {
            // Do something with response data
            return {
                data: response.data,
                status: response.status,
            };
        },
        error => {
            console.log('Error in request: ', error);
            // Do something with request error
            return Promise.reject(error);
        },
    );
};

export default apiInterceptor;
