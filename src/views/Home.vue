<template>
  <div class="home">
    <HelloWorld msg="Welcome to NFT-GO" />
    <ul
      class="infinite-list row-container"
      v-infinite-scroll="load"
      :infinite-scroll-disabled="disabled"
      infinite-scroll-distance="100"
    >
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          v-for="i in count"
          :key="i"
          ><div class="card-content">
            <goods-card :g_id="i" /></div
        ></el-col>
      </el-row>
    </ul>
    <i v-if="loading" class="el-icon-loading loading-icon"></i>
    <p v-if="noMore" class="no-more-text">没有更多了</p>
    <el-backtop target=".el-main" bottom="80"></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GoodsCard from "../components/GoodsCard.vue";

//TODO响应式布局

export default {
  name: "Home",
  components: {
    HelloWorld,
    GoodsCard,
  },
  data() {
    return {
      count: 20,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 48;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 8;
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #00adb5;
  margin: 10px;
  color: #eeeeee;
}
.loading-icon {
  font-size: 2rem;
  color: #ff5722;
  margin: 2rem;
}
.no-more-text {
  font-size: 1rem;
  color: darkgray;
}
.row-container {
  margin-left: 5%;
  margin-right: 5%;
}
.card-content {
  border-radius: 4px;
  min-height: 160px;
  margin: 30px;
  height: 100%;
}
</style>
