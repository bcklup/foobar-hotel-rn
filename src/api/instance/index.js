import axios from 'axios';

import { API_URL } from 'react-native-dotenv';

import apiInterceptor from './interceptors';
import {
    ENDPOINTS_POST,
    ENDPOINTS_PUT,
    ENDPOINTS_GET,
    ENDPOINTS_DELETE,
} from './endpoints';

// API Instance
export const instance = axios.create({
    baseURL: API_URL,
    timeout: 30 * 1000,
    validateStatus: status => {
        return status;
    },
});

// API Interceptors
// apiInterceptor(instance);

// API Methods
export const API = {
    post(endpoint, formData) {
        return instance.post(endpoint, formData);
    },

    put(endpoint, formData) {
        return instance.put(endpoint, formData);
    },

    get(endpoint) {
        return instance.get(endpoint);
    },

    delete(endpoint) {
        return instance.delete(endpoint);
    },
};

// API Endpoints
export const ENDPOINTS = {
    ...ENDPOINTS_POST,
    ...ENDPOINTS_PUT,
    ...ENDPOINTS_GET,
    ...ENDPOINTS_DELETE,
};
