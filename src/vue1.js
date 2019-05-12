import Vue from 'vue'
import Temp2 from './routes/template2.vue'

new Vue({
    el: '#app',
    components: {
        Temp1: () => import(/* webpackChunkName: 'AsyncTemp1' */'./routes/template1.vue'),
        Temp2
    },
    template: '<div> <div>我是Vue1</div><Temp1></Temp1><Temp2></Temp2></div>'
});
