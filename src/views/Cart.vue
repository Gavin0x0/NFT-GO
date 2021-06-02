<template>
  <h1>购物车</h1>
  <el-table
    :data="goodsData"
    style="width: 100%"
    align="center"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="商品名" width="auto">
      <template #default="scope">
        <el-link :href="'/detail/' + scope.row.g_no" class="table-g-name">{{
          scope.row.g_name
        }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="num" label="数量" width="300" align="center">
      <template #default="scope">
        <el-input-number
          v-model="scope.row.num"
          @change="handleChange(scope.row.g_no, scope.row.num)"
          size="mini"
          :min="1"
          :max="100"
        ></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="单价" width="100" align="center">
      <template #default="scope">
        <div class="table-price">{{ "￥" + scope.row.price }}</div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="180" align="center">
      <template #default="scope">
        <el-button
          @click.prevent="deleteBook(scope.$index)"
          type="danger"
          size="mini"
          plain
        >
          移出购物车
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :hide-on-single-page="dataSize > queryData.page"
    :current-page="queryData.page"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="queryData.size"
    layout="prev, pager, next, ->, total"
    :total="dataSize"
    small
  >
  </el-pagination>
  <el-affix position="bottom" :offset="30" style="margin-top: 30px">
    <div class="count-bar">
      <div class="total-num-text">
        已选择
        <div class="total-num">{{ totalNum }}</div>
        件商品
      </div>
      <div class="count-bar-right">
        <div class="total-price-text">总价：</div>
        <div class="total-price">{{ "￥" + totalPrice }}</div>
        <el-button type="primary">去结算</el-button>
      </div>
    </div>
  </el-affix>
</template>

<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { getCartGood, removeCart, updateCart } from "../api/index";

export default {
  setup() {
    const goodsData = ref([]);
    const dataSize = ref(0); //数据总条数
    const totalPrice = ref(0); //商品总价
    const totalNum = ref(0); //商品数量
    const queryData = ref({
      page: 1,
      size: 100,
    });
    const multipleSelection = ref([]);
    onUpdated(() => {
      updateCount();
    });
    onMounted(() => {
      getData();
    });
    function handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      queryData.value.size = val;
      getData();
    }
    function handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      queryData.value.page = val;
      getData();
    }
    function getData() {
      let params = new URLSearchParams();
      params.append("page", queryData.value.page);
      params.append("size", queryData.value.size);
      getCartGood(params)
        .then((res) => {
          console.log(res);
          goodsData.value = res.data;
          dataSize.value = res.data_count;
        })
        .catch((failResponse) => {
          console.log(failResponse);
          ElMessage.error("获取信息失败，服务器错误，请联系管理员");
          ElMessage.error(failResponse.statusText);
        });
    }
    function deleteBook(index) {
      console.log("删除商品：", goodsData.value[index].g_no);
      let params = new URLSearchParams();
      params.append("g_no", goodsData.value[index].g_no);
      removeCart(params)
        .then((res) => {
          console.log(res);
          if (res.success) {
            ElMessage.success("移出成功");
          } else {
            ElMessage.error("移出失败");
          }
        })
        .catch((failResponse) => {
          console.log(failResponse);
          ElMessage.error("获取信息失败，服务器错误，请联系管理员");
          ElMessage.error(failResponse.statusText);
        });
      goodsData.value.splice(index, 1);
    }
    function handleChange(g_no, num) {
      console.log("Update", g_no, num);
      let params = new URLSearchParams();
      params.append("g_no", g_no);
      params.append("num", num);
      console.log(params);
      updateCart(params)
        .then((res) => {
          console.log(res);
          if (res.success) {
            ElMessage.success("更新成功！");
            updateCount();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    //计算更新总价
    function updateCount() {
      let count = 0;
      let g_num = 0;
      for (let i in multipleSelection.value) {
        g_num += 1;
        count +=
          multipleSelection.value[i].num * multipleSelection.value[i].price;
      }
      totalPrice.value = count;
      totalNum.value = g_num;
    }
    function handleSelectionChange(val) {
      multipleSelection.value = val;
      updateCount();
    }
    return {
      dataSize,
      queryData,
      goodsData,
      deleteBook,
      handleSizeChange,
      handleCurrentChange,
      handleSelectionChange,
      handleChange,
      totalPrice,
      totalNum,
    };
  },
};
</script>

<style>
.el-table {
  background: rgb(228, 189, 117);
}
.table-price {
  font-weight: bold;
  font-size: 1rem;
}
.table-g-name {
  font-size: 1.1rem;
}
.count-bar {
  background-color: #ffffff;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.total-num-text {
  margin-left: 20px;
  font-size: 0.8rem;
  font-weight: normal;
  color: #979797ef;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.total-num {
  font-size: 1rem;
  margin: 0 0.2rem 0 0.2rem;
  font-weight: bold;
  color: #ff5722;
}
.total-price-text {
  font-size: 0.8rem;
  font-weight: normal;
  color: #979797ef;
}
.total-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff5722;
  margin-right: 20px;
}
.count-bar-right {
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
