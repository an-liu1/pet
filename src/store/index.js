import Vue from "vue";
import Vuex from "vuex";
import request from "./request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
    productDetail: {},
  },
  mutations: {
    setProductList(state, payload) {
      state.productList = payload;
    },
    getProductDetail(state, payload) {
      state.productDetail = payload;
    },
  },
  actions: {
    async searchProductList({ commit }, data) {
      let res = await request(
        "post",
        `pet/searchProductList/${data.page}/${data.pageSize}`,
        data
      );
      commit("setProductList", res.data);
    },
    async getProductDetail({ commit }, data) {
      let res = await request("get", `pet/getProductDetail/${data}`);
      commit("getProductDetail", res.data);
    },
    async deleteProduct(context, data) {
      await request("delete", `pet/deleteProduct/${data}`);
    },
    async updateProduct(context, data) {
      await request("put", `pet/updateProduct/${data._id}`, data);
    },
    async createProduct(context, data) {
      await request("post", "pet/createProduct", data);
    },
  },
  modules: {},
});
