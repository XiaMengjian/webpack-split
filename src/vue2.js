import Vue from 'vue'
import $ from './assets/jquery'

const App = () => {
    console.log($)
    return (
        <div>
            <div>我是Vue2</div>
        </div>
    )
}
new Vue({
    el: '#app',
    template: <App/>
});
