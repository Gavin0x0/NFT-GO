<template>
  <el-container>
    <el-header><nav-menu></nav-menu></el-header>
    <el-main
      ><router-view></router-view>
      <div class="my-footer">
        Copyright © 2021, NFT-GO. Powered by Vue
      </div></el-main
    >
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
.my-footer {
  background-color: #0000001a;
  text-align: center;
  font-size: 0.5rem;
  box-shadow: -5px 11px 16px 4px #303841;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
}

.el-header {
  color: #303841;
  line-height: 4vh;
  height: 4vh !important;
  top: 0;
}
.my-footer {
  color: #494f55;
  line-height: 4vh;
  bottom: 0;
  height: 4vh !important;
}

.el-main {
  background-color: #eeeeee;
  color: #303841;
  text-align: center;
  margin-top: 6vh;
  height: 90vh;
}
</style>
