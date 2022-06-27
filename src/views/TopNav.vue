<template>
  <div class="navWrapper">
    <div id="menu" :class="{ active: isActive }">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="#282420"
        active-text-color="#716455"
      >
        <el-menu-item
          v-if="!isActive"
          @click="$router.push('/')"
          style="margin: 0 0 0 5%"
        >
          <img alt="logo" src="../assets/multipaw-logo.jpeg" width="55"
        /></el-menu-item>
        <el-menu-item @click="$router.push('/')" style="margin: 0 15% 0 0">
          <img alt="logo" src="../assets/multipaw.jpeg" width="200"
        /></el-menu-item>
        <el-menu-item
          v-for="(i, index) in navList"
          :key="index"
          :index="i.link"
          @click="jump(i.link)"
          >{{ i.title }}</el-menu-item
        >
      </el-menu>
    </div>

    <div id="toggle" @click="select()">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
      isActive: false,
    };
  },
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
  methods: {
    select: function () {
      this.isActive = !this.isActive;
    },
    jump(i) {
      this.$router.push(i);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.navWrapper {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  height: 60px;
  background: #fff;
}
.el-menu-item {
  font-size: 15px;
}

#toggle {
  position: absolute;
  right: 20px;
  top: 14px;
  z-index: 999;
  width: 40px;
  height: 40px;
  cursor: pointer;
  float: right;
  transition: all 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
}

#toggle .span {
  border-radius: 10px;
  background: #716455;
  transition: all 0.3s ease-out;
  backface-visibility: hidden;
}

#top.span.active {
  transform: rotate(45deg) translateX(3px) translateY(5px);
}

#middle.span.active {
  opacity: 0;
}

#bottom.span.active {
  transform: rotate(-45deg) translateX(8px) translateY(-10px);
}

@media only screen and (max-width: 768px) {
  #toggle {
    visibility: visible;
    opacity: 1;
    margin-top: 6px;
  }

  #toggle .span {
    height: 4px;
    margin: 5px 0;
    transition: all 0.3s ease-out;
    backface-visibility: visible;
    visibility: visible;
    opacity: 1;
  }

  #menu .el-menu-item {
    display: none;
  }

  #menu.active {
    margin: 60px 0;
    visibility: visible;
    opacity: 0.98;
    transition: all 0.5s ease-out;
    ::v-deep .el-menu--horizontal .el-menu-item {
      text-align: center;
      float: none;
      display: block;
      height: 100%;
      width: 100%;
      border-top: 1px solid #eaeaeb;
    }
  }
}
</style>
