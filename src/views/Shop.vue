<template>
  <div class="shop">
    <el-image :src="bannerImgPath"></el-image>

    <div class="contentContainer row">
      <div class="sideNav col-md-2">
        <h3>Filter By</h3>
        <div
          class="filterContainer"
          v-for="(i, index) in shopFilterData"
          :key="index"
        >
          <p class="filterTitle">{{ i.title }}</p>
          <div
            class="filterSelection"
            v-for="(j, jndex) in i.selection"
            :key="jndex"
          >
            <el-checkbox-group v-model="checkList" @change="filterChange">
              <el-checkbox :label="j"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="shopList col-md-10 row m-0">
        <div
          class="col-md-6 col-lg-4"
          v-for="(i, index) in productList"
          :key="index"
        >
          <el-image :src="require('@/assets/image/' + i.productImg)"></el-image>
          <p>{{ i.displayName + " - " + i.size }}</p>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImgPath: require("@/assets/banner1.png"),
      checkList: [],
    };
  },
  computed: {
    shopFilterData: function () {
      return [
        {
          title: "HEALTH",
          selection: ["Cognitive", "Puppy", "Skin"],
        },
        {
          title: "CORE DIETS",
          selection: ["CANS"],
        },
        {
          title: "FLAVOUR",
          selection: ["Lamb", "Beef", "Chicken"],
        },
        {
          title: "SIZE",
          selection: ["170g / 6oz", "370g / 13oz"],
        },
      ];
    },
    productList: function () {
      return this.$store.state.productList;
    },
  },
  mounted() {
    this.$store.dispatch("searchProductList", { page: 0, size: 10 });
  },
  methods: {
    filterChange: function () {
      console.log(this.checkList);
      // this.$store.commit("setProductList", this.checkList);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-image {
  width: 100%;
  height: 480px;
}
.contentContainer {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  .sideNav {
    text-align: left;
    h3 {
      text-align: left;
    }
    .filterContainer {
      padding: 10px 0;
      border-bottom: 1px solid #eeeeee;
      .filterTitle {
        font-weight: bold;
        margin: 15px 0;
      }
      .filterSelection {
        margin: 10px 0;
      }
    }
  }
  .shopList {
    .el-image {
      height: 350px;
    }
    p {
      line-height: 25px;
      margin: 5px;
    }
  }
}
</style>
