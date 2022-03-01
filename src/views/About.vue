<template>
  <div class="about">
    <h1 @click="doGetGood">在线商场网站</h1>
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
