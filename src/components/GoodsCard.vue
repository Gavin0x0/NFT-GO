<template>
  <el-card
    :body-style="{ padding: '0px', height: '100%' }"
    shadow="hover"
    style="height: 90%"
  >
    <div class="card-content-container">
      <div></div>
      <img :src="g_img_url" class="image" @click="showDeatil(g_id)" />
      <div style="padding: 14px">
        <div class="good-name" @click="showDeatil(g_id)">{{ g_name }}</div>
        <div class="bottom">
          <div class="price" @click="showDeatil(g_id)">
            <el-tooltip effect="dark" content="DOGE" placement="bottom">
              <img src="../assets/dogecoin.png" class="dogecoin" />
            </el-tooltip>
            {{ price }}
          </div>
          <el-button type="primary" class="button" @click="addToCart(g_id)"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    g_id: Number,
  },
  data() {
    return {
      price: "199.00",
      g_name: "Hello",
      g_img_url:
        "https://tva1.sinaimg.cn/large/007e6d0Xgy1gqlz9xm1k5j30c909u3yi.jpg",
      mock_data: {
        price: "1999.00",
        g_name: "Jobs",
        g_img_url:
          "https://tva1.sinaimg.cn/large/007e6d0Xgy1gqlw0egffjj30c90ftt8l.jpg",
      },
    };
  },
  mounted() {
    if (this.g_id % 3 == 0) {
      this.g_img_url = this.mock_data.g_img_url;
      this.g_name = this.mock_data.g_name;
      this.price = this.mock_data.price;
    } else if (this.g_id % 3 == 1) {
      this.g_img_url =
        "https://tva1.sinaimg.cn/large/007e6d0Xgy1gqlz9978wrj30c90ft3yc.jpg";
      this.g_name = "Command";
      this.price = "588.00";
    }
  },
  methods: {
    showDeatil: function (id) {
      console.log("show", id);
      this.$router.push({ name: "GoodDetail", params: { good_id: id } });
    },
    addToCart: function (id) {
      console.log("show", id, "to cart");
    },
  },
};
</script>

<style>
.good-name {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 200;
  color: #303841;
}
.dogecoin {
  width: 1.3rem;
  height: 1.3rem;
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
}
.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: rgb(223, 62, 62);
  display: flex;
  align-items: center;
  font-family: Avenir Next, Avenir, Avenir Next Local, sans-serif !important;
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
  margin: 10%;
  width: 80%;
  display: block;
  transition: all 0.3s;
}
.image:hover {
  transform: scale(1.25, 1.25);
}
.card-content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
