import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/mixins/style/index.less'
// import './mixins/style/index.less'
// sr-vue-ui
import Components from "@/components";

Vue.use(Components)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

console.log(app)