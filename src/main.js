import Vue from 'vue'
import App from './App'
import router from './router'
// sr-vue-ui
import Components from "@/components";
Vue.use(Components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
