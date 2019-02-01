import Vue from 'vue'
import App from './App.vue'
import KindEditorVue from './plugin'
import 'babel-polyfill'
Vue.use(KindEditorVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
