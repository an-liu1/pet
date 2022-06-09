<template>
  <div>
    <div class="service row" v-for="(i, index) in serviceList" :key="index">
      <div class="col-lg-6" v-if="i.imgPosition == 'left'">
        <el-image :src="i.img" fit="cover"></el-image>
      </div>
      <div class="col-lg-6 serviceContent">
        <h3>{{ i.title }}</h3>
        <p>{{ i.content }}</p>
        <el-button >{{ i.buttonText }}</el-button>
      </div>
      <div class="col-lg-6" v-if="i.imgPosition == 'right'">
        <el-image :src="i.img" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["serviceList"],
};
</script>

<style scoped lang="scss">
.service {
  width: 70%;
  margin: 50px auto;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  .el-image {
    height: 400px;
  }
  .serviceContent {
    min-height: 400px;
    padding: 10px 50px;
    text-align: left;
    h3 {
      font-size: 38px;
      line-height: 48px;
      font-weight: 700;
      color: #4b423a;
    }
    p {
      margin: 30px 0;
      padding: 0;
      font-size: 18px;
      line-height: 28px;
      color: #4b423a;
      opacity: 0.8;
      font-family: "Hind Siliguri", sans-serif;
    }
    .el-button {
      width: 200px;
      height: 60px;
      font-size: 18px;
      background-color: #f2d3b2;
      color: #fff
    }
  }
}
</style>
