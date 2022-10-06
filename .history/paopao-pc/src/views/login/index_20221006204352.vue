<template>
  <div>
    <img class="bigimg" src="@/assets/img/bg.jpg" alt="" />
    <div class="box">
      <el-button size="mini" round @click="gohome"
        ><i class="el-icon-s-home"></i> 返回首页</el-button
      >
      <div class="box1">
        <h1>欢迎登录</h1>
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
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item class="btn">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="jianju"
                >登录</el-button
              >
              <el-button type="primary" @click="goRegister">注册</el-button>
            </el-form-item>
          </el-form>
          <!-- 二维码登录 -->
          <!-- <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <el-button slot="reference">二维码登录</el-button>
          </el-popover> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    //手机校验
    var Phone = (rule, value, callback) => {
      // let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
      let reg = /^\d{4}$/;
      if (!reg.test(value)) {
        callback(new Error("手机号码错误"));
      } else {
        callback();
      }
    };
    //密码校验
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码错误"));
      } else {
        callback();
      }
    };
    return {
      //数据
      ruleForm: {
        phone: "",
        pass: "",
      },

      rules: {
        phone: [{ validator: Phone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },

  methods: {
    //返回首页
    gohome() {
      this.$router.push("/home");
    },
    //捕获登录返回的消息
    async login() {
      try {
        await this.$store.dispatch("Login", this.ruleForm);
        
        this.$router.push('/home')
      } catch (error) {
        console.log(error);
        this.$message({
          showClose: true,
          message: "登录失败:账号或者密码错误",
          type: "error",
        });
      }
    },
    //点击登录
    async submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
          //检验成功之后派发请求
          this.login();
        } else {
          return false;
        }
      });
    },
    //点击注册
    goRegister() {
      //跳转到注册页面
      this.$router.push({ path: "/register" });
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
  // background: #96bfee;
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
  // background-color: aqua;
  margin-top: 81px;
  margin-left: 39px;
}
h1 {
  margin: 10px 150px;
  font-weight: 400;
}
.box3 {
  margin: 35px -13px;
  width: 353px;
  height: 175px;
  // background-color: aquamarine;
}
.box4 {
  margin-left: 37px;
  // background-color: bisque;
}
.jianju {
  margin-left: 10px;
  margin-right: 67px;
}
</style>