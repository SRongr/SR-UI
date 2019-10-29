import Vue from "vue";
import Router from "vue-router";
import indexPage from "@/example/index";
import button from '@/example/button'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: indexPage
    },
    {
      path: "/button",
      name: "button",
      component: button
    },
  ]
});
