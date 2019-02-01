import vueEditor from './KindEditor'

const kindEditor = vueEditor
const install = function (Vue, opts = {}) {
  Vue.component(kindEditor.name, kindEditor);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  kindEditor
}
