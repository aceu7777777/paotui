//对axios进行二次封装
import axios from "axios";
//引入发送请求时候的进度条
import nprogress from "nprogress";
//引入进度条的样式
import 'nprogress/nprogress.css';
const requests = axios.create({
    baseURL:"/api",//基础路径
    timeout:5000, //超时的时间
})  
//请求拦截器
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start();
    return config;
})
//响应拦截器
requests.interceptors.response.use(
    (res)=>{
        //进度条结束
        nprogress.done();
        return res.data;
    },
);
export default requests;