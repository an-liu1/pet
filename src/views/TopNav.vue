<template>
  <div>
    <el-menu :default-active="'1'" mode="horizontal" class="mainNav">
      <el-menu-item @click="$router.push('/')" style="margin: 0 30% 0 5%">
        <img alt="logo" src="../assets/logo.png" width="40"
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
}
</style>
