<template>
<div class="fu">
    <img class="bigimg" src="@/assets/img/大图.jpg" alt="">
    <div class="downlook">
            <div class="control"
            >
            <i class="angle double down icon animated bounce infinite" @click="clickQuotation"></i>
            </div>
        </div>
    <h1 class="ui inverted header">
        Welcome to the running assistant
    </h1>
    <div class="hour">
        <img src="@/assets/img/hour.png" alt="">
        <div class="flex">
        <button class="ui inverted orange button"  >
            <router-link to="/putorder">
            <i class="plus icon"></i>
            立即下单
            </router-link>
        </button>
        <el-popover
            placement="top-start"
            title="下载app立即接单赚钱！"
            width="200"
            trigger="hover"
            content="">
            <img class="wximg" src="@/assets/img/联系方式.jpg" alt="">
            <button slot="reference" class="ui inverted orange button">
                <i class="android icon"></i>
                立即接单
            </button>
        </el-popover>
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
    <div class="about">
        <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
        <div class="row">
            <div class="eight wide column">
            <h3 class="ui header " :class="{'animated rotateInDownLeft':about}">关于</h3>
            <p style="font-size: 25px; ">急您所需&ensp;&ensp;想您所想&ensp;&ensp;每时每刻&ensp;&ensp;实名必达!</p>
            <p style="font-size: 30px; color: orange;">安全代购服务:外卖、小吃、水果、烟酒、生活用品、办公用品
            </p>
            <p style="font-size: 30px; color: orange;">高效代送服务:生日蛋糕、鲜花、礼物、衣服、喜帖、请帖、送伞</p>
            <p style="font-size: 30px; color: orange;">放心代取快递:快件、文件、包裹、干洗衣服等</p>
            </div>
            <div class="six wide right floated column">
                <img src="@/assets/img/跑步.gif" alt="">
            </div>
        </div>
        <div class="row">
            <div class="center aligned column">
            <a class="ui huge button">立即下单</a>
            </div>
        </div>
        </div>
        <div class="flexwx">
            <h3 class="ui header" :class="{'animated slideInLeft':wxorder}">小程序下单有惊喜！</h3>
            <div>
                <img src="@/assets/img/联系方式.jpg" alt="扫一扫下单" style=" width: 650px;">
            </div>
        </div>
        <div class="flexwx">
            <h3 class="ui header" :class="{'animated rollIn':good}">优势</h3>
        </div>
        <div class="flexcards">
            <div class="ui link cards">
            <div class="card">
                <div class="content">
                <div class="header" style="font-size: 26px;"><i class="shield alternate icon"></i>安全</div>
                <div class="description">
                    将在合作学校招安全团队,负责保护您的个人权益,联系微信报名安全员。
                </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                <div class="header" style="font-size: 26px;"><i class="paper plane outline icon"></i>高效</div>
                <div class="description">
                    只要在校区范围内下单,一小时送不到全额退款。
                </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                <div class="header" style="font-size: 26px;"> <i class="heart outline icon"></i>放心</div>
                <div class="description">
                    超过100所高校的选择,好评如潮,放心使用
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    </div>      
    
</div>
</template>

<script>
export default {
components:{
},
data() {
    return {
        //页面滚动到一定位置 加上一定的效果
        scrollTop:'',
        about:false,
        wxorder:false,
        good:false
    }
},
// 滚动监听
mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
},

methods:{
    clickQuotation(){
        window.scrollTo(0, 500)
    },
    // 获取页面滚动距离
    handleScroll () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}
},
watch:{
    scrollTop(val){
        console.log(val);
        if(val >= 400){
            this.about = true
        }if(val >= 1100){
            this.wxorder = true
        }if(val >= 1600){
            this.good = true
        }
    }
},
created() {

},
}
</script>

<style lang="less" scoped>
.ui.header{
    font-size: 60px;
}

.ui.vertical.stripe.segment{
    width: 100%;
    padding-right: 200px;
}
.ui.vertical.stripe.quote.segment{
    width: 100%;
    padding-right: 550px;
}

.bigimg{
    width: 100%;
    height: 659px;
}
.hour{
    position: absolute;
    top: 300px;
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
.ui.inverted.header{
    font-size: 70px;
    position: absolute;
    top: 130px;
    left: 250px;
    color: #000;
}
.downlook{
    position:absolute ;
    top: 690px;
    left: 780px;
    font-size: 30px;
}

.flexwx{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}
.ui.link.cards{
    padding-top: 30px;

}
.flexcards{
    display: flex;
    justify-content: center;
}
.card{
    height: 300px;
}
</style>