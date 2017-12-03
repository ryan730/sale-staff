/**
 * Created by ryan.zhu on 2017/11/7.
 　......(\_/)
 　　......( '_')
 　　..../"NOBUG"\======░ ▒▓▓█D
 　　/"""""""""""""""""""\
 　　\_@_@_@_@_@_@_@/
 */
import hotcss from '::libs/hotcss/CalculatesPage.js'
//import hotcss from '::libs/hotcss/px2rem.js'
//import hotcss from '::libs/hotcss/hotcss.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store_main'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
