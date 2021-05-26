<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="doGetGood">Good</el-button>
    <h1>{{ DB_res }}</h1>
  </div>
</template>

<script>
import { getGood } from "../api/index";
export default {
  data() {
    return {
      DB_res: "",
    };
  },
  methods: {
    doGetGood() {
      console.log("get db");
      getGood()
        .then((res) => {
          console.log(res);
          this.DB_res = res;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
