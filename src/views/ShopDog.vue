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
        >
          <div class="single-product">
            <el-image
              :src="imgPath(i.productImg)"
              @click="openImg(i.productImg)"
            ></el-image>
            <div class="product-btm" @click="jumpToDetail(i._id)">
              <h4>{{ i.displayName + " - " + i.category }}</h4>
              <div class="mt-3">
                <h5>${{ i.price }}</h5>
                <del v-if="i.originPrice">${{ i.originPrice }}</del>
              </div>
            </div>
          </div>
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
    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <el-image
        v-if="productImg"
        :src="require('@/assets/image/' + productImg)"
      ></el-image>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      dialogVisible: false,
      productImg: "",
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
    imgPath(e) {
      try {
        return require("@/assets/image/" + e);
      } catch (error) {
        return require("@/assets/image/default-img.png");
      }
    },
    searchByKeyword() {
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        keyword: this.keyword,
        pet: "Dog",
      });
    },
    filterChange() {
      this.keyword = "";
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        category: this.category,
        size: this.size,
        pet: "Dog",
      });
    },
    clearFilter() {
      this.keyword = "";
      this.category = "";
      this.size = "";
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 12,
        pet: "Dog",
      });
    },
    handleCurrentChange(currentPage) {
      this.$store.dispatch("searchProductList", {
        page: currentPage - 1,
        pageSize: 12,
        pet: "Dog",
      });
    },
    jumpToDetail(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    openImg(i) {
      this.productImg = i;
      this.dialogVisible = true;
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
      .single-product {
        text-align: center;
        margin-bottom: 50px;
        background-color: #ffffff;
        .el-image {
          width: 280px;
          height: 280px;
          padding: 22px 25px 18px;
        }
        .product-btm {
          height: 130px;
          padding: 22px 25px 18px;
          border: 1px solid #f0f2f1;
          text-align: left;
          h4 {
            color: #4a4a4a;
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 0px;
            &:hover {
              color: #716455;
            }
          }
          h5 {
            margin-bottom: 0px;
            margin-right: 10%;
            font-size: 18px;
            color: red;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
