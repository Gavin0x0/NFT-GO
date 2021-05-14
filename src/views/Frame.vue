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
  line-height: 60px;
}

.el-header {
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
