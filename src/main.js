import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import store from "./store";

createApp(App).use(store).use(installElementPlus).use(router).mount("#app");
