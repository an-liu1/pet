<template>
  <div>
    <div class="banner mb-3 mb-md-0">
      <h2>Product Details</h2>
      <p>Very us move be blessed multiply night</p>
    </div>

    <div class="row col-11 mx-auto container">
      <div class="col-6">
        <el-image :src="imgPath(productDetail.productImg)"></el-image>
      </div>
      <div class="col-5 offset-lg-1">
        <div class="s_product_text">
          <h3>{{ productDetail.displayName }}</h3>
          <div
            v-if="
              productDetail.productSizeAndPrice &&
              productDetail.productSizeAndPrice.length > 0
            "
          >
            <h2>${{ productDetail.productSizeAndPrice[showIndex].price }}</h2>
            <div class="row">
              <div
                v-for="(i, index) in productDetail.productSizeAndPrice"
                :key="index"
                class="col-auto"
              >
                <b-button variant="outline-warning" @click="showPrice(index)">{{
                  i.size
                }}</b-button>
              </div>
            </div>
          </div>
          <h2 v-else>${{ productDetail.price }}</h2>
          <ul class="list mt-4">
            <li><span>Category :</span> {{ productDetail.category }}</li>
            <li><span>Brand :</span> {{ productDetail.brand }}</li>
            <li><span>Pet :</span> {{ productDetail.pet }}</li>
          </ul>
          <p v-if="productDetail.description">
            {{ productDetail.description }}
          </p>
          <p v-else>
            Mill Oil is an innovative oil filled radiator with the most modern
            technology. If you are looking for something that can make your
            interior look awesome, and at the same time give you the pleasant
            warm feeling during the winter.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIndex: 0,
    };
  },
  computed: {
    productDetail: function () {
      return this.$store.state.productDetail;
    },
  },
  mounted() {
    this.$store
      .dispatch("getProductDetail", this.$route.params.id)
      .then(() => {});
  },
  methods: {
    imgPath(e) {
      try {
        return require("@/assets/image/" + e);
      } catch (error) {
        return require("@/assets/image/default-img.png");
      }
    },
    showPrice(index) {
      this.showIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-color: #ffffff;
  width: 100%;
  height: 200px;
  text-align: left;
  h2 {
    margin-left: 135px;
    padding: 60px 10px 0;
    color: #000;
  }
  p {
    margin-left: 145px;
  }
}
.container {
  margin: 110px 0;
  .s_product_text {
    margin-left: -15px;
    margin-top: 65px;
    text-align: left;
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #000;
      font-weight: bolder;
    }
    h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 15px;
      color: red;
    }
    .list {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: normal;
        color: #555555;
        span {
          width: 90px;
          display: inline-block;

          color: #000;
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
    p {
      padding-top: 20px;
      border-top: 1px dotted #d5d5d5;
      margin-top: 20px;
      margin-bottom: 70px;
    }
  }
}
</style>
