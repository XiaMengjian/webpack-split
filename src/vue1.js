import Vue from 'vue'
import _ from 'lodash'
import $ from './assets/jquery'
import Echarts from './assets/echarts'

console.log('vue2  3 xxx ggggg 反反复复 ttt  frrr ffff')

new Vue({
    el: '#app',
    components: {
        Temp1: () => import(/* webpackChunkName: 'asyncTemp1' */'./routes/template1.vue')
    },
    template: '<div> <div>我是Vue1</div><Temp1></Temp1></div>'
});
