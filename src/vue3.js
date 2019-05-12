import Vue from 'vue'
import App from './routes/template2'
import OrgChart from './assets/orgchart'

const App = () => {
    console.log($)
    return (
        <div>
            <div>我是Vue3</div>
        </div>
    )
}
new Vue({
    el: '#app',
    template: <App/>
});
