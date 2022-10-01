<template>
<div>
    <div class="flex"> 
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
    <el-form-item label="收货地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item label="跑腿类型" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
    </el-form-item>
    <el-form-item label="详细内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
    </el-form-item>
    <el-form-item label="完成时间">
        <el-col :span="5">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time1" style="width: 150px;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="5">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.time2" style="width: 150px;"></el-time-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="跑腿金额" prop="money">
    <el-select v-model="ruleForm.money" placeholder="请选择金额">
        <el-option label="3" value="3"></el-option>
        <el-option label="4" value="4"></el-option>
        <el-option label="5" value="5"></el-option>
        <el-option label="6" value="6"></el-option>
        <el-option label="7" value="7"></el-option>
        <el-option label="8" value="8"></el-option>
        <el-option label="9" value="9元"></el-option>
        <el-option label="10" value="10"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm">提交订单</el-button>
        <el-button @click="resetForm">内容重置</el-button>
    </el-form-item>
    </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        //下单表单的数据
        return {
        ruleForm: {
            runaddress:'',
            contact:'',
            phone:'',
            address:'',
            type:'',
            content:'',
            time1:'',
            time2:'',
            money:'',
        },
        //发送请求需要的数据


        //下单表单的验证规则
        rules: {
            runaddress: [
            {  required: true, message: '请输入跑腿地址', trigger: 'blur' },
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
            address: [
            {  required: true, message: '请输入收货地址', trigger: 'blur' },
            {  pattern: /^[0-9\u4e00-\u9fa5]{1,40}$/, message: '请正确输入收货地址', trigger: 'blur'}
            ],
            type: [
            {  required: true, message: '请输入类型', trigger: 'blur' },
            {  pattern: /^[0-9\u4e00-\u9fa5]{1,40}$/, message: '请正确输入收货地址', trigger: 'blur'}
            ],
            content: [
            { trigger: 'blur' }
            ],
            time1: [
            { trigger: 'blur' }
            ],
            money:[
            { trigger: 'blur' }
            ],
        }
        };
    },
    methods: {
        submitForm() {
        

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