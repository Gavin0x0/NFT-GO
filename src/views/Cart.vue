<template>
  <h1>购物车</h1>
  <el-table :data="goodsData" style="width: 100%" size="medium" align="center">
    <el-table-column prop="g_name" label="商品名" width="auto">
    </el-table-column>
    <el-table-column prop="num" label="数量" width="200"> </el-table-column>
    <el-table-column prop="price" label="单价" width="100"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="180">
      <template #default="scope">
        <el-button
          @click.prevent="deleteBook(scope.$index)"
          type="danger"
        >
          移出购物车
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="queryData.page"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="queryData.size"
    layout="prev, pager, next, ->, total"
    :total="dataSize"
  >
  </el-pagination>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { getCartGood } from "../api/index";

export default {
  setup() {
    const goodsData = ref([]);
    const dataSize = ref(0); //数据总条数
    const queryData = ref({
      page: 1,
      size: 100,
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
      console.log("删除：", index);
      goodsData.value.splice(index, 1);
    }
    return {
      dataSize,
      queryData,
      goodsData,
      deleteBook,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style>
.el-table {
  background: rgb(228, 189, 117);
}
</style>
