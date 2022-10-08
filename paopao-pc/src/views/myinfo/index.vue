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
    <a href="javascript:;" @click="myaddress">
        <p>我的地址</p>
    </a>
    <a href="javascript:;" @click="addaddress">
        <p>添加地址</p>
    </a>
    <a href="javascript:;" @click="problemFn">
        <p>常见问题</p>
    </a>
    <a href="javascript:;" @click="feedbackFn">
        <p>意见反馈</p>
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
<el-dialog title="我的地址" :visible.sync="dialogTableVisible" class="dialog">
    <div class="ui list">
    <div class="item" v-for="item in myaddressdata" :key="item.address">
        <i class="map marker icon"></i>
        <div class="content">
        <a class="header">{{item.address}}</a>
        </div>
    </div>
    </div>
</el-dialog>
<!-- 添加地址 -->
<el-dialog title="添加地址" :visible.sync="dialogFormVisible">
<el-form :model="ruleForm">
    <el-form-item label="添加您的常用地址" prop="userAddress">
        <el-input type="textarea" v-model="ruleForm.userAddress"></el-input>
    </el-form-item>
</el-form>
<div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
</div>
</el-dialog>
<!-- 意见反馈 -->
<el-dialog title="意见反馈" :visible.sync="feedback">
    <el-form >
        <div class="ui form">
        <div class="three fields">
            <div class="field">
            <label>您的账号</label>
            <input type="text" placeholder="输入账号">
            </div>
            <div class="field">
            <label>您的学校</label>
            <input type="text" placeholder="输入学校">
            </div>
            <div class="field">
            <label>您的反馈类型</label>
            <input type="text" placeholder="输入类型">
            </div>
        </div>
        <div class="field">
            <label>反馈详细</label>
            <textarea></textarea>
        </div>
        <div class="field">
            <label>备注</label>
            <textarea rows="2"></textarea>
        </div>
        </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="feedback = false">取 消</el-button>
        <el-button type="primary" @click="feedbackdown">确 定</el-button>
    </div>
</el-dialog>
<!-- 问题 -->
<el-dialog title="常见问题(鼠标悬停获得答案)" :visible.sync="problem" class="problem">
    <div class="ui styled accordion">
        <div class="title" title="本平台24小时工作">
            <i class="dropdown icon"></i>
            平台服务时间?
        </div>
        <div class="title" title="点击首页或者我的订单下单,欢迎使用小程序下单">
            <i class="dropdown icon" ></i>
            如何下单?   
        </div>
        <div class="title"  title="收费根据消费者自己定,当没有接单可以适当调整">
            <i class="dropdown icon"></i>
            如何收费?
        </div>
        <div class="title" title="24h内">
            <i class="dropdown icon"></i>
            取消订单后什么时候退款?
        </div>
        <div class="title" title="客服qq:---------- wx群:----- qq群:--------">
            <i class="dropdown icon"></i>
            如何联系客服?
        </div>
        </div>
</el-dialog>
</div>
</template>

<script>
//测试查询个人信息
import { MyinfoAPI, AlladdressAPI,AddaddressAPI } from '@/api/myinfo.js'
export default {
data() {
    return {
        //个人信息
        myinfo:{},
        //表格
        dialogTableVisible:false,
        //表单
        dialogFormVisible:false,
        myaddressdata:[],
        ruleForm:{
            userID:'555',
            userAddress:'',
        },
        //意见与问题
        feedback:false,
        problem:false,
        rules: {
        userAddress: [
        {  required: true, message: '请填写地址', trigger: 'blur' },
        ],
        }
    }
},
methods:{
    async user() {
        const res = await MyinfoAPI(19990523) 
        this.myinfo = res.data
        //console.log(this.myinfo);
    },
    async myaddress() {
        this.dialogTableVisible = true
        const res = await AlladdressAPI(555) 
        this.myaddressdata = res.data
        //console.log(this.myaddressdata);
    },
    addaddress() {
        this.dialogFormVisible = true
    },
    async add() {
        const res = await AddaddressAPI(this.ruleForm)
        console.log(res);
        this.$message({
            type: 'success',
            message: '添加地址成功!'
        });
        this.dialogFormVisible = false
    },
    feedbackFn(){
        this.feedback = true
    },
    problemFn(){
        this.problem = true
    },
    feedbackdown(){
        this.feedback = false
        this.$message({
            type: 'success',
            message: '反馈成功,我们会越来越好的!'
        });
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
    //发请求的数据

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
.problem{
    height: 700px;
}

</style>