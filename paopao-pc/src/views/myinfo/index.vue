<template>
<div>
<div class="my"  v-if="islogin">
<!-- 概览 -->
<div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
    <div class="avatar">
        <img src="@/assets/img/user.png"/>
    </div>
    <div class="student">
    <div v-if="!realinfo">
    <router-link to="/realinfo">
        未实名,请先去实名
    </router-link>
    </div>
    <span v-if="realinfo">已实名</span>
    </div>
    <h4>终端练习生</h4>
    </div>
    <div class="item">
    <a href="javascript:;">
        <p>会员中心</p>
    </a>
    </div>
</div>
</div>
<!-- tabs -->
<div  class="tabs" v-if="islogin">
<el-tabs type="card" class="card"> 
    <el-tab-pane label="用户余额" class="el-tab-pane">
        <div class="ui raised very padded text container segment">
            <h2 class="ui header">用户余额</h2>
            <div class="ui divider"></div>
            <p class="usermoney">可用余额: <span class="orange">0元 </span></p>
            <p class="usermoney">可用积分: <span class="orange">0跑跑币 </span></p>
            
            <button class="ui orange basic button">
                <i class="money bill alternate outline icon"></i>
                去充值
            </button>
            <button class="ui orange basic button">
                <i class="yen sign icon"></i>
                去提现
            </button>
        </div>
    </el-tab-pane>
    <el-tab-pane label="已完成订单" class="el-tab-pane">
        <div class="ui raised very padded text container segment">
            <h2 class="ui header">已完成订单</h2>
            <h5>七天以后的订单系统将自动删除</h5>
            <div class="ui divider"></div>
            <table class="ui orange table">
            <thead>
                <tr><th>订单编号</th>
                <th>订单类型</th>
                <th>订单内容</th>
            </tr></thead><tbody>
                <tr>
                <td>000101</td>
                <td>代拿快递</td>
                <td>快递是小件在主校区菜鸟驿站 取件码为B-1-2 名字小明</td>
                </tr>
                <tr>
                <td>000112</td>
                <td>代拿快递</td>
                <td>快递是小件在主校区菜鸟驿站 取件码为B-1-2 名字小明</td>
                </tr>
                
            </tbody>
            </table>
        </div>
    </el-tab-pane>
    <el-tab-pane label="我完成的订单" class="el-tab-pane">
        <div class="ui raised very padded text container segment">
            <h2 class="ui header">我完成的订单</h2>
            <div class="ui divider"></div>
            <table class="ui orange table">
            <thead>
                <tr><th>订单编号</th>
                <th>订单内容</th>
                <th>订单收益</th>
            </tr></thead><tbody>
                <tr>
                <td>000101</td>
                <td>快递是小件在主校区菜鸟驿站 取件码为B-1-2 名字小明</td>
                <td>2元</td>
                </tr>
                <tr>
                <td>000112</td>
                <td>快递是小件在主校区菜鸟驿站 取件码为B-1-2 名字小明</td>
                <td>3元</td>
                </tr>
                <tr>
                <td>000112</td>
                <td>快递是小件在主校区菜鸟驿站 取件码为B-1-2 名字小明</td>
                <td>3元</td>
                </tr>
            </tbody>
            </table>
        </div>
    </el-tab-pane>
</el-tabs>
</div>
<el-empty description="您还没有登录,请先去登录吧！" v-if="!islogin"></el-empty>
</div>
</template>

<script>
//测试查询个人信息
import {MyinfoAPI} from '@/api/myinfo.js'
export default {
data() {
    return {
        //个人信息
        myinfo:{},

    }
},
methods:{
    async user(){
        const res = await MyinfoAPI(19990523) 
        this.myinfo = res.data
        console.log(this.myinfo);
    }
},
//判断是否登录
computed:{
    islogin(){
        return this.$store.state.islogin
    },
    realinfo(){
        return this.$store.state.realinfo
    }
},
created() {
    this.user()
},
}
</script>

<style lang="less" scoped>
.my{
    padding-top: 10px;
    display: flex;
    justify-content: center;
}
.home-overview {
width: 1000px;
height: 130px;
background-color: orange;
display: flex;

.user-meta {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    .avatar {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 60px;
    img {
        width: 100%;
        height: 100%;
    }
    }
    h4 {
    padding-left: 26px;
    font-size: 18px;
    font-weight: normal;
    color: white;
    }
}
.item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:first-child {
    border-right: 1px solid #f4f4f4;
    }
    a {
    color: white;
    font-size: 16px;
    text-align: center;
    .iconfont {
        font-size: 32px;
    }
    p {
        line-height: 32px;
    }
    }
}
}
.student{
    position: absolute;
    top: 40px;
    left: 165px; 
    a{
        text-decoration: none;
        color: red;
    }
}
.tabs{
    padding-top: 20px;
    display: flex;
    justify-content: center;
}
.card{
    width: 700px;
}
.ui.raised.very.padded.text.container.segment{
    width: 1000px;
}
.orange{
    color: orange;
}
.usermoney{
    font-size: 20px;
}
</style>