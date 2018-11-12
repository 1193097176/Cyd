//入口文件
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(iView);
new Vue({
    el:"#app",
    render : h=>h(App),
    router
})