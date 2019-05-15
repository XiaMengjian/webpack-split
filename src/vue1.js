import Vue from 'vue'
import _ from 'lodash'
import $ from './assets/jquery'
import Echarts from './assets/echarts'

new Vue({
    el: '#app',
    components: {
        Temp1: () => import(/* webpackChunkName: 'AsyncTemp1' */'./routes/template1.vue')
        // Temp2
    },
    template: '<div> <div>我是Vue1</div><Temp1></Temp1></div>'
});
