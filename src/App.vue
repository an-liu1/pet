<template>
  <div id="app">
    <TopNav />
    <div class="content">
      <router-view />
    </div>
    <div id="footerCon">
      <div class="cpy-right">
        <p>Copyright ©2022 Multipaw Pet Lifestyle Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/views/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #716455;
  background-color: #f7f7f7;
}
.content {
  margin-top: 60px;
}
#footerCon {
  background-color: #c5ac92;
  text-align: center;
  width: 100%;
  margin-top: 50px;
}

.cpy-right {
  color: #f5f5f5;
  font-size: 0.875em;
  letter-spacing: 1px;
  display: block;
  line-height: 1.8em;
  width: 80%;
  margin: 0 auto;
}

.cpy-right p {
  padding: 20px 0;
  margin-bottom: 0;
}
</style>
