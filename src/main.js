import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosPlugin from "axios";

const vue = createApp(App);
vue.use(router);
vue.use(store);

vue.config.globalProperties.axios = axiosPlugin;
vue.mount("#app");
