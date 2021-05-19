<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="dohello">Servlet</el-button>
    <el-button @click="dodbtest">DB</el-button>
    <h1>{{ DB_res }}</h1>
  </div>
</template>

<script>
import { hello, dbtest } from "../api/index";
export default {
  data() {
    return {
      DB_res: "",
    };
  },
  methods: {
    dohello() {
      console.log("get hello");
      hello()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    dodbtest() {
      console.log("get db");
      dbtest()
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
