import axios from 'axios';

const BASE_URI=process.env.VUE_APP_BASE_API;

//原生
/* axios.get('/db.json').then(response => {
    const data = response.data;
    console.log(data);
}) */

const request = axios.create({
    //baseURL: '/dev-api',
    //baseURL: '/',
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000 //请求超时 5000毫秒
})

request.interceptors.request.use(config => {
    //请求的拦截
    return config;
}, error => {
    //出现异常
    return Promise.reject(error);
})

request.interceptors.response.use(response => {
    //response.data
    return response;
}, error => {
    return Promise.reject(error);
})

/* request.get('/db.json').then(response => {
    const data = response.data;
    console.log(data);
}) */

export default request // 导出自定义创建的 axios 对象
