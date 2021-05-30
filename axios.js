import http from 'axios';
import qs from 'qs';
http.defaults.baseURL = 'http://localhost:3001';
http.defaults.timeout = 5000;

http.interceptors.request.use(
    config =>{
        if(config.method === 'get' || config.method === 'put'){
            config.headers = {
                "Content-type":"application/json;charset=utf8"
            }
            config.data = qs.stringify(config.data);
        }else if(config.method === 'post' || config.method === 'delete'){
            config.headers = {
                "Content-type":"application/x-www-form-urlencoded;charset=utf-8"
            }
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => Promise.reject(error)
)

http.interceptors.response.use(
    response => {
        return response.data;
    },
    err => Promise.reject(err)
)

export default http;


