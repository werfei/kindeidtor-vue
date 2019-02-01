import Vue from 'vue'
import App from './App.vue'
import KindEditorVue from './KindEditor'
import 'babel-polyfill'

Vue.component("KindEditor", KindEditorVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
