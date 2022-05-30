import Vue from "vue";
import Vuex from "vuex";
import request from "./request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
  },
  mutations: {
    setProductList: function (state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    async searchProductList({ commit }, data) {
      let res = await request(
        "post",
        `pet/searchProductList/${data.page}/${data.size}`,
        data
      );
      commit("setProductList", res.data);
    },
  },
  modules: {},
});
