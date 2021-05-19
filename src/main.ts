import { createApp } from "vue";
import App from "./App";
import "./App.less";

import router from "@/router";

import Components from "../components";

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

createApp(App)
  .use(router)
  .use(Components)
  .mount("#app");
