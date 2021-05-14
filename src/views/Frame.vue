<template>
  <el-container>
    <el-header><nav-menu></nav-menu></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";

export default {
  components: { NavMenu },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 6vh;
  height: 6vh !important;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
}

.el-header {
  top: 0;
}
.el-footer {
  bottom: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  margin-top: 6vh;
  height: 88vh;
}
</style>
