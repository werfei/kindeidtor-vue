import Vue from 'vue'
import App from './App.vue'
import KindEditorVue from './plugin'
import './static/kindeditor/kindeditor-all-min.js'
import './static/kindeditor/themes/default/default.css'
import 'babel-polyfill'
Vue.use(KindEditorVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
