<template>
<div>
    <el-menu :default-active="activeIndex" 
    class="el-menu-demo" mode="horizontal" @select="handleSelect" 
    :router="true" active-text-color="orange" >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/myorder">我下的单</el-menu-item>
    <el-menu-item index="/mypickorder">我的任务</el-menu-item>
    <el-menu-item index="/myinfo">个人中心</el-menu-item>
    <div class="userlogin" v-if="!isLogin">
        <button class="ui orange basic button">
            <router-link to="/login">
            登录
            </router-link>
        </button>
        <button class="ui orange basic button">
            <router-link to="/register">
            注册
            </router-link>
        </button>
    </div>
    <div class="user" v-else>
        <a class="ui image label">
        <img src="@/assets/img/user.png">
        张帅晗
        </a>
    </div>
    </el-menu>
</div>
</template>

<script>
export default {
    data() {
    return {
        //组件data
        activeIndex: '/home',
        activeIndex2: '/home',
        //用户是否登录
        isLogin:false,
        nowtime:null,
    };
    },
    methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
    },

}
</script>

<style lang="less" scoped>
.userlogin{
    padding-top: 12px;
}
.user{
    padding-top: 17px;
}
a{
    text-decoration: none;
    color:orange ;
}
.el-menu-demo{
    padding-left: 150px;
}
</style>

