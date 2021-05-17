<template>
  <el-page-header
    @back="goBack"
    icon="el-icon-arrow-left"
    content="商品详情"
  ></el-page-header>
  <div class="row-container">
    <el-row :gutter="20" class="row-align">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="des-col"
        ><div class="grid-content describe-container">
          <div>
            <div class="good-name">Jobs</div>
            <p class="good-describe">
              Do you know that feeling of wonder you get when you travel? Where
              even common things seem to be magical and fascinating? That desire
              to observe, rather than simply look at, reality?
            </p>
          </div>
          <div>
            <div class="good-price">
              <img src="../assets/dogecoin.png" class="dogecoin" /> 1999.00 DOGE
            </div>

            <el-button type="primary" @click="buyNow">立即购买</el-button>
            <el-button>加入购物车</el-button>
          </div>
        </div></el-col
      >
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="img-col"
        ><div class="grid-content img-container">
          <img :src="g_img_url" class="good-image" /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  //$route.params.good_id 获取传入的id
  data() {
    return {
      price: "199.00",
      g_name: "好吃的汉堡",
      g_img_url:
        "https://tva1.sinaimg.cn/large/007e6d0Xgy1gqlw0egffjj30c90ftt8l.jpg",
      mock_data: {
        price: "1999.00",
        g_name: "Jobs",
        g_img_url:
          "https://tva1.sinaimg.cn/large/007e6d0Xgy1gqlw0egffjj30c90ftt8l.jpg",
      },
    };
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.go(-1);
    },
  },
};
</script>

<style>
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
