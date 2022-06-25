<template>
  <div class="shop">
    <el-image :src="bannerImgPath"></el-image>

    <div class="contentContainer row">
      <div class="sideNav col-md-2">
        <h3>Filter By</h3>
        <el-input
          v-model="keyword"
          placeholder="请输入搜索条件"
          :clearable="true"
          @change="searchByKeyword"
        ></el-input>

        <div
          class="filterContainer"
          v-for="(i, index) in shopFilterData"
          :key="index"
        >
          <div v-if="i.title == 'Category'">
            <p class="filterTitle">{{ i.title }}</p>
            <div
              class="filterSelection"
              v-for="(j, jndex) in i.selection"
              :key="jndex"
            >
              <el-radio-group v-model="category" @change="filterChange">
                <el-radio :label="j.value">{{ j.text }}</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div v-if="i.title == 'SIZE'">
            <p class="filterTitle">{{ i.title }}</p>
            <div
              class="filterSelection"
              v-for="(j, jndex) in i.selection"
              :key="jndex"
            >
              <el-radio-group v-model="size" @change="filterChange">
                <el-radio :label="j.value">{{ j.text }}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
        <el-button @click="clearFilter">Clear</el-button>
      </div>
      <div class="shopList col-md-10 row m-0">
        <div
          class="col-md-6 col-lg-4 product"
          v-for="(i, index) in productList"
          :key="index"
          @click="jumpToDetail(i._id)"
        >
          <el-image :src="require('@/assets/image/' + i.productImg)"></el-image>
          <p>{{ i.displayName + " - " + i.size }}</p>
          <!-- <p>{{ i.category }}</p> -->
        </div>
        <el-pagination
          class="mt-5"
          @current-change="handleCurrentChange"
          background
          :current-page.sync="currentPage"
          :page-size="12"
          layout="prev, pager, next,total"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImgPath: require("@/assets/banner1.png"),
      currentPage: 0,
      keyword: "",
      category: "",
      size: "",
    };
  },
  computed: {
    shopFilterData: function () {
      return [
        {
          title: "Category",
          selection: [
            { value: "Food", text: "Food" },
            { value: "Eat", text: "Eat/Drink" },
            { value: "Toy", text: "Toy" },
            { value: "Grooming", text: "Grooming" },
            { value: "Collar", text: "Collar/Leash" },
            { value: "Carrier", text: "Carrier" },
            { value: "Litter", text: "Litter/Toilet" },
            { value: "Food Storage", text: "Food Storage" },
            { value: "Furniture", text: "Furniture/Scratcher" },
          ],
        },
        {
          title: "SIZE",
          selection: [{ value: "Medium", text: "Medium" }],
        },
      ];
    },
    productList: function () {
      return this.$store.state.productList.product;
    },
    total: function () {
      return this.$store.state.productList.total;
    },
  },
  mounted() {
    this.clearFilter();
  },
  methods: {
    searchByKeyword() {
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        keyword: this.keyword,
        pet: "Cat",
      });
    },
    filterChange() {
      this.keyword = "";
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        category: this.category,
        size: this.size,
        pet: "Cat",
      });
    },
    clearFilter() {
      this.keyword = "";
      this.category = "";
      this.size = "";
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        pet: "Cat",
      });
    },
    handleCurrentChange(currentPage) {
      this.$store.dispatch("searchProductList", {
        page: currentPage - 1,
        pageSize: 12,
        pet: "Cat",
      });
    },
    jumpToDetail(id) {
      this.$router.push(`/productDetail/${id}`);
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
    .product {
      &:hover {
        cursor: pointer;
      }
    }
    .el-image {
      height: 350px;
    }
    p {
      line-height: 25px;
      margin: 5px;
      &:hover {
        cursor: pointer;
        color: #f2d3b2;
      }
    }
  }
}
</style>
