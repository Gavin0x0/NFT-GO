<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-text">登陆</div>
      <div class="input-container">
        <el-input v-model="username" placeholder="Username"></el-input>
      </div>
      <div class="input-container">
        <el-input v-model="password" placeholder="Password" show-password></el-input>
      </div>
      <div class="button-container">
        <el-button type="primary" style="width: 100%" @click="onLogin"
          >登陆</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { login } from "../api/index";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    function onLogin() {
      console.log(username.value, password.value);
      let params = new URLSearchParams();
      params.append("username", username.value);
      params.append("password", password.value);
      login(params)
        .then((res) => {
          console.log(res);
          if (res.success) {
            ElMessage.success(res.name + "，欢迎你，登陆成功！");
          } else {
            if (res.exist) {
              ElMessage.error("密码错误！");
            } else {
              ElMessage.warning("该用户名不存在！");
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return {
      username,
      password,
      onLogin,
    };
  },
};
</script>
<style>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background: linear-gradient(145deg, #d6d6d6, #ffffff);
  box-shadow: 40px 40px 80px #cacaca, -40px -40px 80px #ffffff;
}
.login-text {
  font-size: 2rem;
  font-weight: bolder;
  color: #616161;
  letter-spacing: 4rem;
  text-indent: 4rem;
  margin: 1rem;
}
.input-container {
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button-container {
  width: 300px;
  margin-bottom: 30px;
}
</style>
