//对axios进行二次封装
import axios from "axios";
const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})
//引入nprogress和它的样式
import nprogress from 'nprogress';
import "nprogress/nprogress.css";

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //进度条开始
    nprogress.start();
    //config：配置对象，对象了里面有一个很重要的属性：headers请求头
    return config;
});
//响应拦截器：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    console.log('响应失败'+error);
    return Promise.reject(new Error('fail'));
});
export default requests;