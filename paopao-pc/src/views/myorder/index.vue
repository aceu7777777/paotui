<template>
<div>
<!-- table -->
<div class="pad"> 
    <router-link to="/putorder">
    <div class="ui top attached button orange" tabindex="0">
            <span style="    padding-right: 26px;">新建订单</span>
            <i class="plus icon"></i>
    </div>
    </router-link>
    <div class="tableflex">
        <table class="ui celled padded table">
        <thead>
            <tr><th class="single line">订单状态</th>
            <th>订单金额</th>
            <th>订单类型</th>
            <th>订单地址</th>
            <th>订单时间</th>
            <th>订单内容</th>
            <th>操作</th>
        </tr></thead>
        <tbody>
            <tr v-for="item in orderList" :key="item.orderID">
            <td>
                <h2 class="ui center aligned header">{{item.orderState==1 ? '未接单' : '已接单'}}</h2>
            </td>
            <td class="single line center" >{{item.orderMoney}}元 </td>
            <td>
                {{item.orderType==1 ? '帮拿快递' : '帮忙带饭'}}
            </td>
            <td>{{item.orderAddress}}</td>
            <td class=" aligned">提交:{{item.orderTime}}</td>
            <td>{{item.orderContent}}</td>
            <td><button class="ui grey basic button" @click="oppenorder(item.orderID)">编辑订单</button><br>
                <button class="ui grey basic button" @click="okorder(item.orderID)">确认收货</button>
                <i class="x icon" @click="deleteorder(item.orderID)"></i>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</div>
<el-dialog title="更改订单内容" :visible.sync="dialogFormVisible">
<el-form :model="ruleForm">
    <el-form-item label="跑腿金额" prop="orderMoney">
    <el-select v-model="ruleForm.orderMoney" placeholder="请选择金额">
        <el-option label="3.0" value="3.0"></el-option>
        <el-option label="4.0" value="4.0"></el-option>
        <el-option label="5.0" value="5.0"></el-option>
        <el-option label="6.0" value="6.0"></el-option>
        <el-option label="7.0" value="7.0"></el-option>
        <el-option label="8.0" value="8.0"></el-option>
        <el-option label="9.0" value="9.0"></el-option>
        <el-option label="10.0" value="10.0"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="详细内容" prop="orderContent">
        <el-input type="textarea" v-model="ruleForm.orderContent"></el-input>
    </el-form-item>
</el-form>
<div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="oppenorder()">确 定</el-button>
</div>
</el-dialog>
<!-- 数据为空的时候显示 -->
<el-empty description="暂无订单,快点击上方按钮下单吧！" v-if="!orderList"></el-empty>
<el-empty description="您还没有登录,登录后再来吧！" v-if="!islogin"></el-empty>
<!-- 分页组件 -->
<!-- <div class="page">
    <el-pagination
    page-size="5"
    background="true"
    layout="prev, pager, next"
    :total="10">
    </el-pagination>
</div> -->
</div>

</template>

<script>
import { MyorderAPI } from '@/api/myorder.js'
export default {
data(){
    return {
        //我的路由
        route:'/myorder',
        //订单列表
        orderList:[],
        //控制对话框 有的时候需要修改金额和备注
        dialogFormVisible: false,
        //记录一下用户要修改数据的id
        correctid:'',
        formLabelWidth: '120px',
        ruleForm: {
            orderMoney:'',
            orderContent:''
        },
        rules: {
        orderContent: [
        {  required: true, message: '请填写描述信息', trigger: 'blur' },
        ],
        orderMoney:[
        {  required: true, message: '请选择佣金', trigger: 'change' },
        ],
        }
    }
},
methods:{
    async allorder(){
        const res = await MyorderAPI(19990523) 
        this.orderList=res.data.MissedOrder.reverse()
    },
    //删除订单操作
    deleteorder(id){
        this.$confirm('此操作将会取消此订单且不可撤销, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            //删除操作 没有接口做效果
            const index = this.orderList.findIndex(item => item.orderID === id)
            console.log(index)
            //大于0 找到了 直接删
            if(index >= 0){
                this.orderList.splice(index, 1)
            }
            this.$message({
            type: 'success',
            message: '删除订单成功!'
        });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消订单删除'
        });          
        });
    },
    //点击确认收货
    okorder(id){
        this.$confirm('此操作将会确认收货且不可撤销, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            //删除操作 没有接口做效果
            const index = this.orderList.findIndex(item => item.orderID === id)
            console.log(index)
            //大于0 找到了 直接删
            if(index >= 0){
                this.orderList.splice(index, 1)
            }
            this.$message({
            type: 'success',
            message: '确认收货成功!'
        });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消确认收货'
        });          
        });
    },
    //点击编辑订单
    oppenorder(id){
        if(id){
            this.dialogFormVisible = true
            const i = this.orderList.find(item => item.orderID === id)
            //数据回显
            this.ruleForm.orderMoney = i.orderMoney
            this.ruleForm.orderContent = i.orderContent
            this.correctid = id
        }else{
            this.dialogFormVisible = false
            //把记录下来的id拿到 然后准备寻找列表数据 修改
            const modifydata = this.orderList.find(item => item.orderID === this.correctid)
            //找到后数据修改
            modifydata.orderMoney = this.ruleForm.orderMoney
            modifydata.orderContent = this.ruleForm.orderContent
            //改完等数都走完再清空 方便下次点击的时候成功回显 看来不用了 如果要请求记得这个

        }
    },

},
created(){
    if(this.islogin){
    this.allorder()
    }
},
//为了解决添加订单数据不更新的情况 用这个方法先
//检测到路径改变 且改变值等于我的订单 就再次请求数据 this.allorder()
watch:{
    $route:{
        handler(to){
            if(to.path === '/myorder'){
                if(this.islogin){
                this.allorder()
                }
            }
        },
        immediate:true,
    }
},
//判断是否登录
computed:{
    islogin(){
        return this.$store.state.islogin
    }
},

}
</script>

<style lang="less" scoped>
.pad{
    padding-top: 30px;
}
.ui.celled.padded.table{
    width: 1200px;
}

.ui.top.attached.button{
    width: 1200px;
    height: 70px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;


}
.tableflex{
    display: flex;
    justify-content: center;
}
.ui.grey.basic.button{
    margin-top: 2px;
    font-size: 10px;
}
.plus.icon{
    font-size: 40px;
    padding-top: 15px;
}
.page{
    padding-top: 20px;
    display: flex;
    justify-content: center;
}
.x.icon{
    font-size: 25px;
    padding-left: 10px;
}
</style>