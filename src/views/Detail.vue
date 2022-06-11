<template>
  <div class="row col-8 mx-auto container">
    <div class="col-5">
      <el-image
        :src="require('@/assets/image/' + productDetail.productImg)"
      ></el-image>
    </div>
    <div class="col-7"></div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #ffffff;
}
</style>
