import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [
      {
        productImg: "https://picsum.photos/300/?image=1",
        name: "Beef",
        size: "170g / 6oz",
        category: "CANS",
        keywords: ["Beef", "170g / 6oz", "CANS"],
        display: true,
      },
      {
        productImg: "https://picsum.photos/300/?image=6",
        name: "Beef",
        size: "370g / 13oz",
        category: "CANS",
        keywords: ["Beef", "370g / 13oz", "CANS"],
        display: true,
      },
      {
        productImg: "https://picsum.photos/300/?image=2",
        name: "Chicken",
        size: "170g / 6oz",
        category: "CANS",
        keywords: ["Chicken", "170g / 6oz", "CANS"],
        display: true,
      },
      {
        productImg: "https://picsum.photos/300/?image=3",
        name: "Chicken",
        size: "370g / 13oz",
        category: "CANS",
        keywords: ["Chicken", "370g / 13oz", "CANS"],
        display: true,
      },
      {
        productImg: "https://picsum.photos/300/?image=4",
        name: "Lamb",
        size: "170g / 6oz",
        category: "CANS",
        keywords: ["Lamb", "170g / 6oz", "CANS"],
        display: true,
      },
      {
        productImg: "https://picsum.photos/300/?image=5",
        name: "Lamb",
        size: "370g / 13oz",
        category: "CANS",
        keywords: ["Lamb", "370g / 13oz", "CANS"],
        display: true,
      },
    ],
  },
  mutations: {
    setProductList: function (state, payload) {
      let list = [
        {
          productImg: "https://picsum.photos/300/?image=1",
          name: "Beef",
          size: "170g / 6oz",
          category: "CANS",
          keywords: ["Beef", "170g / 6oz", "CANS"],
          display: true,
        },
        {
          productImg: "https://picsum.photos/300/?image=6",
          name: "Beef",
          size: "370g / 13oz",
          category: "CANS",
          keywords: ["Beef", "370g / 13oz", "CANS"],
          display: true,
        },
        {
          productImg: "https://picsum.photos/300/?image=2",
          name: "Chicken",
          size: "170g / 6oz",
          category: "CANS",
          keywords: ["Chicken", "170g / 6oz", "CANS"],
          display: true,
        },
        {
          productImg: "https://picsum.photos/300/?image=3",
          name: "Chicken",
          size: "370g / 13oz",
          category: "CANS",
          keywords: ["Chicken", "370g / 13oz", "CANS"],
          display: true,
        },
        {
          productImg: "https://picsum.photos/300/?image=4",
          name: "Lamb",
          size: "170g / 6oz",
          category: "CANS",
          keywords: ["Lamb", "170g / 6oz", "CANS"],
          display: true,
        },
        {
          productImg: "https://picsum.photos/300/?image=5",
          name: "Lamb",
          size: "370g / 13oz",
          category: "CANS",
          keywords: ["Lamb", "370g / 13oz", "CANS"],
          display: true,
        },
      ];
      if (payload.length > 0) {
        list.map((i) => {
          if (
            payload.find((j) => {
              return i.keywords.indexOf(j) !== -1;
            })
          ) {
            i.display = true;
          } else {
            i.display = false;
          }
          return i;
        });
        state.productList = list;
      } else {
        state.productList = list;
      }
    },
  },
  actions: {},
  modules: {},
});
