<template>
<div>
    <img class="bigimg" src="@/assets/img/首页大图.webp" alt="">
    <div class="hour">
        <img src="@/assets/img/hour.png" alt="">
        <div class="flex">
        <button class="ui inverted orange button"  >
            <router-link to="/putorder">
            <i class="plus icon"></i>
            立即下单
            </router-link>
        </button>
        <button class="ui inverted orange button"  >
            <router-link to="/putorder">
            <i class="plus icon"></i>
            立即接单
            </router-link>
        </button>
        <el-popover
            placement="top-start"
            title="微信扫一扫进入小程序"
            width="200"
            trigger="hover"
            content="">
            <img class="wximg" src="@/assets/img/联系方式.jpg" alt="">
            <button slot="reference" class="ui inverted orange button">
                <i class="wechat icon"></i>
                小程序下单有惊喜
            </button>
    </el-popover>
    </div>
    </div>
    <div class="ui segment">
    <h2 class="ui floated header">合作高校</h2>
    <div class="ui clearing divider"></div>
    <a class="ui yellow label">阿里巴巴终端练习生</a>
    <a class="ui blue label">下次一定队</a>
</div>
</div>
</template>

<script>

export default {
components:{
},
data() {
    return {

    }
},
methods:{

}
}
</script>

<style lang="less" scoped>
.bigimg{
    width: 100%;
}
.hour{
    position: absolute;
    top: 200px;
    left: 150px;
    display: flex;
    flex-direction: column;
}
.ui.inverted.orange.button{
    font-size: 20px;

}
.flex{
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
}
a{
    text-decoration: none;
    color:orange ;
}
.wximg{
    width: 100%;
}
.ui.segment
{
    width: 400px;
    position: absolute;
    top:750px ;
    left: 150px;
}
</style>