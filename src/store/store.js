import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.js";
import search from "./modules/search.js";
import browse from "./modules/browse.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    search: search,
    browse: browse,
  }
});

export default store;