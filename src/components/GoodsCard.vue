<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div style="padding: 14px">
      <div class="good-name">好吃的汉堡</div>
      <div class="bottom">
        <div class="price">{{ price }}</div>
        <el-button type="primary" class="button">加入购物车</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      price: "$199",
    };
  },
};
</script>

<style>
.good-name {
  text-align: left;
  font-size: 1.3rem;
  font-weight: 600;
}
.price {
  font-size: 2rem;
  color: rgb(223, 62, 62);
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
