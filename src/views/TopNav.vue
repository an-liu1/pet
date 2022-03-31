<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand @click="$router.push('/')">
        <img alt="logo" src="../assets/logo.png" width="40"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(i, index) in navList"
            :key="index"
            @click="$router.push(i.link)"
            >{{ i.title }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    navList: function () {
      return [
        { title: "HOME", link: "/" },
        { title: "SHOP", link: "/shop" },
        { title: "SERVICE", link: "/service" },
        { title: "CONTACT", link: "/contact" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .navbar-dark .navbar-brand {
  margin-left: 30px;
  @media screen and (max-width: 390px) {
    margin-left: 10px;
  }
}
#nav-collapse {
  @media screen and (min-width: 1200px) {
    margin-left: 30%;
    .nav-item {
      width: 120px;
      font-weight: bold;
      a {
        color: #ffffff;
        &:hover {
          color: rgb(247, 202, 209);
        }
      }
    }
  }
}
</style>
