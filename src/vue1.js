import Vue from 'vue'
import Temp1 from './routes/template1.vue'

const App = () => {
    return (
        <div>
            <div>我是Vue1</div>
            <Temp1></Temp1>
        </div>
    )
}

new Vue({
    el: '#app',
    components: { Temp1: () => import(/* webpackChunkName */'./routes/template1.vue') },
    template: <App/>
});
