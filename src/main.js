import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import "./css/main.css";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$capFirstChar = function capFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

app.mount("#app");
