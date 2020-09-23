import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./HomePage.vue";
import Search from "./SearchPage.vue";
import Categories from "./CategoriesPage.vue";
import Browse from "./BrowsePage.vue";
import Show from "./ShowPage.vue";
import NotFound from "./NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/categories", component: Categories },
  { path: "/browse", component: Browse },
  { path: "/show", component: Show },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(){
    return{x:0, y:0}
  }
});

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");