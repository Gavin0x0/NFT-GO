<template>
  <el-card
    :body-style="{ padding: '0px', height: '100%' }"
    shadow="hover"
    style="height: 100%"
  >
    <el-skeleton :loading="loading" animated style="height: 100%">
      <template #template>
        <div class="card-content-container">
          <div></div>
          <el-skeleton-item
            variant="image"
            style="width: 100%; height: 380px"
            class="skeleton-image"
          />
          <div style="padding: 14px" class="good-card-name">
            <el-skeleton-item variant="h1" style="width: 60%" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
          </div>
        </div>
      </template>
      <template #default>
        <div class="card-content-container">
          <div></div>
          <img
            :src="g_img_url"
            class="image"
            @click="showDeatil(g_no)"
            @load="imgLoaded"
          />
          <div style="margin: 14px">
            <div class="good-card-name" @click="showDeatil(g_no)">
              {{ g_name }}
            </div>
            <div class="bottom">
              <div class="price" @click="showDeatil(g_no)">
                <el-tooltip effect="dark" content="DOGE" placement="bottom">
                  <img src="../assets/dogecoin.png" class="dogecoin" />
                </el-tooltip>
                {{ price }}
              </div>
              <el-button type="primary" class="button" @click="addToCart(g_no)"
                >加入购物车</el-button
              >
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </el-card>
  <img :src="g_img_url" class="template-image" @load="imgLoaded" />
</template>
<script>
import { getGood, addCart } from "../api/index";
import { ElMessage } from "element-plus";

export default {
  props: {
    g_no: Number,
  },
  data() {
    return {
      loading: true,
      price: "199.00",
      g_name: "Hello",
      g_img_url: "null",
    };
  },
  mounted() {
    let g_no = this.$props.g_no;3
    let params = new URLSearchParams();
    params.append("g_no", g_no);
    getGood(params)
      .then((res) => {
        //console.log(res);
        this.g_name = res.g_name;
        this.g_img_url = res.g_img_url;
        this.price = res.price;
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
      let params = new URLSearchParams();
      params.append("g_no", id);
      addCart(params)
        .then((res) => {
          console.log(res);
          if(res.success){
            ElMessage.success("加入成功！");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    imgLoaded: function () {
      console.log("加载完毕");
      this.loading = false;
    },
  },
};
</script>

<style>
.good-card-name {
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
.template-image {
  max-width: 0%;
  max-height: 0%;
  display: none;
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
.skeleton-image {
  margin: 10%;
  max-width: 80%;
  max-height: 80%;
  display: block;
}
</style>
