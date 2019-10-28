import Vue from "vue";
import Router from "vue-router";
import indexPage from "@/example/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: indexPage
    },
  ]
});
