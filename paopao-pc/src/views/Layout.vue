<template>
<div>
    <!-- 头部导航 -->
    <Nav/>
    <!-- 二级路由 -->
    <keep-alive>
        <router-view /> 
    </keep-alive>

</div>
</template>

<script>
import Nav from '@/components/nav.vue'
export default {    
components:{Nav}
}
</script>

<style lang="less" scoped>

</style>