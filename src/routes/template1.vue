<template>
    <div>
        <h1>我是页面1</h1>
    </div>
</template>
<script>
    import JSCookie from 'js-cookie'
    import $ from '../assets/jquery'
    import html2Canvas from 'html2canvas'
    import Echarts from '../assets/echarts'

    console.log('测试runtime chunk 2')

    export default {
        components: {
            // Temp2: () => import(/* webpackChunkName: 'asyncTemp2' */'./template2.vue')
        }
    }
</script>
<style lang="less" scoped>
    h1 {
        color: red;
    }
</style>
