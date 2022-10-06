<template>
  <div>
    <img class="bigimg" src="@/assets/img/bg.jpg" alt="" />
    <div class="box">
      <el-button size="mini" round @click="gohome"
        ><i class="el-icon-s-home"></i> 返回首页</el-button
      >

      <div class="box1">
        <h1>欢迎注册</h1>
        <div class="box3">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="电话" prop="phone">
              <el-input v-model="ruleForm.phone" type="phone"></el-input>
            </el-form-item>
            <!-- <el-form-item label="验证码" prop="verification_code">
              <el-input v-model="ruleForm.verification_code"></el-input>
            </el-form-item> -->
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="btn"
                >注册</el-button
              >
              <el-button type="primary" @click="goLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register3",
  data() {
    //手机校验
    var Phone = (rule, value, callback) => {
      // let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
      let reg = /^\d{4}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    //验证码校验
    // var VerificationCode = (rule,value,callback)=>{
    //   let reg = /^\d{4}$/;
    //   if(!reg.test(value)){
    //    callback(new Error('请输入正确的验证码'))
    //   }else{
    //       callback()
    //   }
    // }
    // 密码校验
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        // verification_code:"",
        pass: "",
        checkPass: "",
      },
      rules: {
        phone: [{ validator: Phone, trigger: "blur" }],
        // verification_code:[{validator:VerificationCode,trigger:"blur"}],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    //返回首页
    gohome() {
      this.$router.push("/home");
    },
    //跳转登录页面
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    //捕获注册返回消息
    async register() {
      try {
        log
        console.log("ruleForm:",this.ruleForm);
        await this.$store.dispatch("Register", this.ruleForm);
        this.$message({
          showClose: true,
          message: '注册成功',
          type: 'success'
        });
      } catch(error) {
        this.$message({
          showClose: true,
          message: '注册失败',
          type: 'error'
        });
      }
    },
   
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //校验成功之后派发请求
          this.register();
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.bigimg {
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.box1 {
  width: 421px;
  height: 402px;
  //   background-color: aqua;
  margin-left: 35px;
  margin-top: 50px;
}
h1 {
  margin: 10px 150px;
  font-weight: 400;
}
.box3 {
  margin: 35px -13px;
  width: 353px;
  height: 100%;
  //   background-color: aquamarine;
}
.box4 {
  margin-left: 37px;
  background-color: bisque;
}
.btn {
  margin-left: 15px;
  margin-right: 66px;
}
</style>