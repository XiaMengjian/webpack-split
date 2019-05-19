<template>
    <div>
        <h1>我是页面1</h1>
        <Temp2></Temp2>
    </div>
</template>
<script>
    import JSCookie from 'js-cookie'
    import $ from '../assets/jquery'
    import Echarts from '../assets/echarts'

    console.log('xiugai ffhfgggg')

    export default {
        components: {
            Temp2: () => import(/* webpackChunkName: 'asyncTemp2' */'./template2.vue')
        }
    }
</script>
<style lang="less" scoped>
    h1 {
        color: red;
    }
</style>
