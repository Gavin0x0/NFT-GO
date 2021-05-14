<template>
  <div class="home">
    <HelloWorld msg="Welcome to NFT-GOx" />
    <ul
      class="infinite-list"
      v-infinite-scroll="load"
      infinite-scroll-distance="10"
    >
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
    <el-backtop target=".el-main" bottom="80"></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 20,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style scoped>
.infinite-list {
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
</style>
