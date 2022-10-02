<template>
  <div>
    <img class="bigimg" src="@/assets/img/首页大图.webp" alt="">
    <div class="box">
      <div class="box1">
        <h1>实名认证</h1>
        <div class="box3">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="学校" prop="school">
              <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idcard">
              <el-input v-model="ruleForm.idcard"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="btn"
                >认证</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "realinfo",
  data() {
    //非空校验
    var Name = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        callback();
      }
    };
    var School = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入学校"));
      } else {
        callback();
      }
    };
    //手机校验
    // var Phone = (rule,value,callback)=>{
    //   let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
    //   if(!reg.test(value)){
    //    callback(new Error('请输入正确的手机号码'))
    //   }else{
    //       callback()
    //   }
    // }
    //验证码校验
    // var VerificationCode = (rule,value,callback)=>{
    //   let reg = /^\d{4}$/;
    //   if(!reg.test(value)){
    //    callback(new Error('请输入正确的验证码'))
    //   }else{
    //       callback()
    //   }
    // }
    //身份证号校验
     var IdCard = (rule,value,callback)=>{
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if(!reg.test(value)){
          callback(new Error('请输入正确的身份证号码'))
        }else{
          callback()
        }
    }
    return {
      ruleForm: {
        name:"",
        school:"",
        // phone:"",
        // verification_code:"",
        idcard:"",
      },
      rules: {
        name:[{validator:Name,trigger:"blur"}],
        school:[{validator:School,trigger:"blur"}],
        // phone:[{validator:Phone,trigger:"blur"}],
        // verification_code:[{validator:VerificationCode,trigger:"blur"}],
        idcard:[{validator:IdCard,trigger:"blur"}],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('IdentityVerify',this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.bigimg{
    width: 100%;
}
.box {
  width: 500px;
  height: 500px;
//   background: #96bfee;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
}
.box1 {
  width: 421px;
  height: 402px;
//   background-color: aqua;
  margin-left: 35px;
  margin-top: 50px;
}
h1 {
  margin: 10px 154px;
  font-weight: 400;
}
.box3 {
  margin: 35px -13px;
  width: 353px;
  height: 100%;
//   background-color: aquamarine;
}
.btn {
  width: 200px;
  margin-left: 23px;
}
</style>