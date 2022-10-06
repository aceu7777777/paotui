//引入mockjs模块
import Mock from 'mockjs';
//引入json文件
//默认对外暴露图片和json数据格式
import login from './login.json';
//mock数据：第一个参数是请求的地址，第二个参数是请求的数据
Mock.mock("/mock/login",{code:200,data:login});