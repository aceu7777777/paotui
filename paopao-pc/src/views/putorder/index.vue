<template>
<div>
    <div class="flex" v-if="islogin"> 
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="跑腿地址" prop="runaddress" class="w">
        <el-input  v-model="ruleForm.runaddress" ></el-input>
    </el-form-item>
    <el-form-item label="联系人" prop="contact">
        <el-input  v-model="ruleForm.contact" ></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="收货地址" prop="orderAddress">
        <el-input v-model="ruleForm.orderAddress"></el-input>
    </el-form-item>
    <el-form-item label="跑腿类型" prop="orderType">
    <el-select v-model="ruleForm.orderType" placeholder="请选择跑腿类型">
        <el-option label="代取快递" value="1"></el-option>
        <el-option label="帮忙买饭" value="2"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="详细内容" prop="orderContent">
        <el-input type="textarea" v-model="ruleForm.orderContent"></el-input>
    </el-form-item>
    <el-form-item label="跑腿金额" prop="orderMoney">
    <el-select v-model="ruleForm.orderMoney" placeholder="请选择金额">
        <el-option label="3" value="3"></el-option>
        <el-option label="4" value="4"></el-option>
        <el-option label="5" value="5"></el-option>
        <el-option label="6" value="6"></el-option>
        <el-option label="7" value="7"></el-option>
        <el-option label="8" value="8"></el-option>
        <el-option label="9" value="9"></el-option>
        <el-option label="10" value="10"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交订单</el-button>
        <el-button @click="resetForm">内容重置</el-button>
    </el-form-item>
    </el-form>
    </div>
    <el-empty description="您还没有登录,登录后再来吧！" v-if="!islogin"></el-empty>
</div>
</template>

<script>
import { PutorderAPI } from '@/api/putorder.js' 
import dayjs from 'dayjs'
export default {
    data() {
        //下单表单的数据
        return {
        ruleForm: {
            //前面不带order的不传
            runaddress:'',
            contact:'',
            phone:'',
            orderAddress:'',
            orderType:'',
            orderContent:'',
            orderMoney:'',
        },
        //造个加数据 后面从store中拿
        clientID:'19990523',


        //下单表单的验证规则
        rules: {
            runaddress: [
            {  required: true, message: '请正确入跑腿地址', trigger: 'blur' },
            {  pattern: /^[0-9\u4e00-\u9fa5]{1,40}$/, message: '请正确输入跑腿地址', trigger: 'blur'}
            ],
            contact: [
            {  required: true, message: '请输入联系人', trigger: 'blur' },
            {  pattern: /^[\u4e00-\u9fa5]{1,5}$/, message: '请正确输入联系人', trigger: 'blur'}
            ],
            phone: [
            {  required: true, message: '请输入联系方式', trigger: 'blur' },
            {  pattern: /^[0-9]{11}$/, message: '请输入11位手机号', trigger: 'blur'}
            ],
            orderAddress: [
            {  required: true, message: '请输入收货地址', trigger: 'blur' },
            {  pattern: /^[0-9\u4e00-\u9fa5]{1,40}$/, message: '请正确输入收货地址', trigger: 'blur'}
            ],
            orderType: [
            {  required: true, message: '请选择类型', trigger: 'change' },
            ],
            orderContent: [
            {  required: true, message: '请填写描述信息', trigger: 'blur' },
            ],
            orderMoney:[
            {  required: true, message: '请选择佣金', trigger: 'change' },
            ],
        }
        };
    },
    //发送请求需要的数据
    //计算属性算出正确格式的orderReserveTime        当前时间 dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
    computed:{
        orderReserveTime(){
            return dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
        },
        //判断是否登录
        islogin(){
            return this.$store.state.islogin
        }

    },
    //clientID store中取
    methods: {  
        //点按钮发请求 orderMoney orderContent orderAddress orderType 从表单ruleForm取 而clientID store中取 
        //计算属性算出正确格式的orderReserveTime
        async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
            //check=0创建成功，check=-1创建失败
                const res = PutorderAPI(this.ruleForm.orderMoney,
                this.ruleForm.orderType,this.clientID,this.ruleForm.orderContent,this.ruleForm.orderAddress,
                this.orderReserveTime)
                this.$message({
                    message: '恭喜您成功添加订单!!!',
                    type: 'success'
                }); 
                console.log(res);
                this.$router.push({path:"/home"})
            } else {
                this.$message.error('请正确填写添加订单表单!!!');
                return false;
            }
        });
    },
        resetForm() {

        }
}
}
</script>

<style lang="less" scoped>
.demo-ruleForm{
    padding-top: 50px;
    width: 500px;
    
}
.flex{
    display: flex;
    justify-content: center;
}

</style>