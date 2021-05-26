<template>
  <el-page-header
    @back="goBack"
    icon="el-icon-arrow-left"
    content="商品详情"
  ></el-page-header>
  <div class="row-container">
    <el-row :gutter="20" class="row-align">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="des-col"
        ><el-skeleton
          :loading="loading"
          animated
          class="grid-content describe-container"
        >
          <template #template>
            <div>
              <el-skeleton-item
                variant="h1"
                style="height: 60px; width: 100%"
              />
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
            </div>
            <div>
              <div class="good-price">
                <img src="../assets/dogecoin.png" class="dogecoin" />
                <el-skeleton-item
                  variant="h1"
                  style="height: 50px; width: 100%"
                />
              </div>
              <el-button type="primary" @click="buyNow">立即购买</el-button>
              <el-button>加入购物车</el-button>
            </div>
          </template>
          <template #default>
            <div class="grid-content describe-container">
              <div>
                <div class="good-name">{{ g_name }}</div>
                <p class="good-describe">{{ g_des }}</p>
              </div>
              <div>
                <div class="good-price">
                  <img src="../assets/dogecoin.png" class="dogecoin" />
                  {{ price }} DOGE
                </div>

                <el-button type="primary" @click="buyNow">立即购买</el-button>
                <el-button>加入购物车</el-button>
              </div>
            </div>
          </template>
        </el-skeleton>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="img-col"
        ><div class="grid-content img-container">
          <el-skeleton :loading="loading" animated>
            <template #template>
              <el-skeleton-item
                variant="image"
                style="height: 600px; width: 100%"
              />
            </template>
            <template #default>
              <img :src="g_img_url" class="good-image" />
            </template>
          </el-skeleton></div
      ></el-col>
    </el-row>
  </div>
  <img :src="g_img_url" class="template-image" @load="imgLoaded" />
</template>

<script>
import { getGood } from "../api/index";
export default {
  //$route.params.good_id 获取传入的id
  data() {
    return {
      loading: true,
      g_name: "Hello",
      g_img_url: "null",
      g_des: "Hello world?",
      price: "199.00",
    };
  },
  mounted() {
    let g_id = (this.$route.params.good_id % 6) + 1;
    console.log("查看了", g_id);
    let params = new URLSearchParams();
    params.append("g_id", g_id);
    getGood(params)
      .then((res) => {
        console.log(res);
        this.g_name = res.g_name;
        this.g_img_url = res.g_img_url;
        this.g_des = res.g_des;
        this.price = res.price;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.go(-1);
    },
    imgLoaded() {
      console.log("加载完毕");
      this.loading = false;
    },
  },
};
</script>

<style>
.template-image {
  max-width: 0%;
  max-height: 0%;
  display: none;
}
.row-container {
  margin-left: 15%;
  margin-right: 15%;
}
.row-align {
  align-content: stretch;
}
.describe-container {
  text-align: left;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.good-name {
  font-weight: 700;
  color: #303841;
  font-size: 34px;
  line-height: 44px;
}
.good-describe {
  font-size: 18px;
  line-height: 24px;
  color: rgb(113, 128, 150);
  margin: 8px 0px 28px;
  overflow-wrap: break-word;
  word-break: normal;
}
.good-price {
  font-size: 34px;
  line-height: 44px;
  font-weight: 700;
  color: #303841;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
}
.good-image {
  width: 100%;
}
.dogecoin {
  width: 34px;
  height: 34px;
  margin-right: 0.5rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 160px;
  margin: 30px;
}
.des-col {
  display: flex !important;
  justify-content: center;
  align-content: stretch;
}
.img-col {
  display: flex !important;
  justify-content: center;
  align-content: stretch;
}
.img-container {
  width: 100%;
}
.bg-purple {
  background: #d3dce6;
}
</style>
