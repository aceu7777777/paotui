<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
      active-text-color="orange"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/myorder">我下的单</el-menu-item>
      <el-menu-item index="/mypickorder">我的任务</el-menu-item>
      <el-menu-item index="/myinfo">个人中心</el-menu-item>
      <div class="userlogin" v-if="!islogin">
        <button class="ui orange basic button">
          <router-link to="/login"> 登录 </router-link>
        </button>
        <button class="ui orange basic button">
          <router-link to="/register"> 注册 </router-link>
        </button>
      </div>
      <div class="user" v-else>
        <a class="ui image label">
          <img src="@/assets/img/user.png" />
          终端练习生
        </a>
        <button class="ui orange basic button" @click="exit">退出登录</button>
      </div>
      <div class="box">
        <el-button icon="el-icon-position" type="goon" @click="getLocationInfo"
          >位置信息</el-button
        >
        <div v-if="locationinfo" class="box1">{{locationinfo}}</div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //组件data
      activeIndex: "/home",
      activeIndex2: "/home",
      //用户是否登录
      isLogin: false,
      nowtime: null,
      locationinfo:"",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    exit() {
      this.$confirm("是否退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出登录成功!",
          });
          this.$router.push({ path: "/login" });
          this.$store.state.islogin = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出登录",
          });
        });
    },
    //点击获取位置信息
    getLocationInfo() {
      let data = {
        key: "5AZBZ-MYDEJ-UNRFN-K4IE6-FCBZV-TZFT4", //申请的密钥
      };
      let url = "https://apis.map.qq.com/ws/location/v1/ip"; //这个就是地理位置信息的接口
      data.output = "jsonp";
      this.$jsonp(url, data)
        .then((res) => {
          let ad_info = res.result.ad_info;
          this.locationinfo = ad_info.city+ad_info.district
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    islogin() {
      return this.$store.state.islogin;
    },
  },
};
</script>

<style lang="less" scoped>
.userlogin {
  padding-top: 12px;
}
.user {
  padding-top: 15px;
}
a {
  text-decoration: none;
  color: orange;
}
.el-menu-demo {
  padding-left: 150px;
}
.box {
  position: absolute;
  top: 10px;
  right: 50px;
  // background-color: aqua;
  width: 300px;
  height: 50px;
}
.box1 {
  margin-left: 10px;
  display: inline;
}
// 定位按钮的颜色
// .el-button--goon.is-active,
// .el-button--goon:active {
//   background: #20B2AA;
//   border-color: #20B2AA;
//   color: #fff;
// }

.el-button--goon:focus,
.el-button--goon:hover {
  background: #ffa909;
  border-color: #ffa909;
  color: #fff;
}

.el-button--goon {
  color: #fff;
  background-color: orange;
  border-color: orange;
}
</style>

