<template>
  <div>
    <el-menu :default-active="'1'" mode="horizontal" class="mainNav" text-color="#282420"
  active-text-color="#716455">
      <el-menu-item @click="$router.push('/')" style="margin: 0 0 0 5%">
        <img alt="logo" src="../assets/multipaw-logo.jpeg" width="55"
      /></el-menu-item>
      <el-menu-item @click="$router.push('/')" style="margin: 0 15% 0 0">
        <img alt="logo" src="../assets/multipaw.jpeg" width="200"
      /></el-menu-item>
      <el-menu-item
        v-for="(i, index) in navList"
        :key="index"
        :index="index + 1"
        @click="$router.push(i.link)"
        >{{ i.title }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    navList: function () {
      return [
        { title: "HOME", link: "/" },
        { title: "CAT", link: "/cat" },
        { title: "DOG", link: "/dog" },
        { title: "SERVICE", link: "/service" },
        { title: "CONTACT", link: "/contact" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.mainNav {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  height: 60px;
}
.el-menu-item{
  font-size: 15px;
}
</style>
