<template>
  <div>
    <div class="service row" v-for="(i, index) in serviceList" :key="index">
      <el-divider></el-divider>
      <div class="col-lg-6" v-if="i.imgPosition == 'left'">
        <el-image :src="i.img" fit="contain"></el-image>
      </div>
      <div class="col-lg-6 serviceContent">
        <h3>{{ i.title }}</h3>
        <p v-html="i.content"></p>
      </div>
      <div class="col-lg-6" v-if="i.imgPosition == 'right'">
        <el-image :src="i.img" fit="contain"></el-image>
      </div>

      <el-divider content-position="right"
        ><i class="el-icon-star-off"></i
      ></el-divider>
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
  margin: 20px auto;
  background-color: #fae9d8;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  .el-image {
    height: 350px;
  }
  .el-divider {
    background-color: #282420;
  }
  .el-icon-star-off {
    border-radius: 5px;
  }
  .serviceContent {
    min-height: 400px;
    padding: 50px;
    text-align: center;
    h3 {
      font-size: 28px;
      line-height: 48px;
      font-weight: 700;
      color: #4b423a;
    }
    p {
      margin: 30px 0;
      padding: 0;
      font-size: 14px;
      line-height: 28px;
      color: #4b423a;
      opacity: 0.8;
      font-family: "Hind Siliguri", sans-serif;
    }
  }
}
</style>
