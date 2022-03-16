import axios from 'axios';
import { API_URL } from './global';

axios.interceptors.request.use(async(config: any) => {
    const userToken = localStorage.getItem('TOKEN');

    if(userToken) {
        config.headers={
            "x-access-taken": userToken
        }
    }
    config.timeout = 10000;
    console.log(config);

    return config;
});

axios.interceptors.response.use((response: any) => {
        return response;
    },
    async(error: any) => {
        console.log(error);
        if(error.response.status === "401") {
            const refreshToken = localStorage.getItem('TOKEN_LOCAL');
            const refreshURL = ``;
            return axios.request(error.config);
        } else {
            localStorage.removeItem('TOKEN');
            localStorage.removeItem('REFRESH_TOKEN');
        }
        
        return Promise.reject(error);
    }
)

export const httpClient = axios;