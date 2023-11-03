import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios-interceptors";

const vue = createApp(App);
vue.use(router);
vue.use(store);

vue.config.globalProperties.$axios = axios;
vue.mount("#app");
