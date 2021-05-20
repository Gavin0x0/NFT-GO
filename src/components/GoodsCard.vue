<template>
  <el-card
    :body-style="{ padding: '0px', height: '100%' }"
    shadow="hover"
    style="height: 100%"
  >
    <div class="card-content-container">
      <div></div>
      <img :src="g_img_url" class="image" @click="showDeatil(g_id)" />
      <div style="margin: 14px">
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
import { getGood } from "../api/index";
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
    };
  },
  mounted() {
    let g_id = (this.$props.g_id % 3) + 1;
    console.log("查看了", g_id);
    let params = new URLSearchParams();
    params.append("g_id", g_id);
    getGood(params)
      .then((res) => {
        console.log(res);
        this.g_name = res.gName;
        this.g_img_url = res.gCoverUrl;
        this.price = res.gPrice;
      })
      .catch((e) => {
        console.log(e);
      });
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
  max-width: 80%;
  max-height: 80%;
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
