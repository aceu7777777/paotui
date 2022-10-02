import axios from 'axios'
//import store from '@/store'

const myAxios = axios.create({
    baseURL: 'http://101.43.223.7:8080'
})
//因为没有token 所以用不着下边了
// //定义请求拦截器
// //你的请求每次走request都会先走这个请求拦截器
// myAxios.interceptors.request.use(function(config){
//     //config是配置对象 你需要传给后台的配置项（data herder...）
//     //在发请求时都会触发一次   这个return交给axios内  根据配置项发请求
//     //这里的就是携带head
//     //config.headers.Authorization = store.state.token
//     //在每次请求时都携带 headers 
//     //我们判断一下才够完美 在登录注册时的  请求中  并不需要携带token
//     if (store.state.token) {
//         config.headers.Authorization = store.state.token
//     }
// },function(error){
//     //请求发起前的代码出问题 如果有报错 会直接进入这里
//     //axios原地哪个promise 对象的状态为失败 返回结果error 相当于catch函数里的return
//     //Promise.reject(error) 会在原地留下一个promise对象（状态为失败）
//     return Promise.reject(error)
//     //相当于
//     //return new promise((resolve,reject)=>{
//         //reject(error)
//     //})
// })

// // 定义响应拦截器
// myAxios.interceptors.response.use(function (response) {
//     // 响应状态码为 2xx 时触发成功的回调，形参中的 response 是“成功的结果”
//     return response
//     }, function (error) {
//     // 响应状态码不是 2xx 时触发失败的回调，形参中的 error 是“失败的结果”
//     if (error.response.status === 401) {
//       // 无效的 token
//       // 把 Vuex 中的 token 重置为空，并跳转到登录页面
//         store.commit('updateToken', '')
//         //router.push('/login')
//     }
//     return Promise.reject(error)
// })



export default myAxios

