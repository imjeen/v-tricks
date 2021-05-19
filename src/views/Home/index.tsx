import { defineComponent } from "vue";

import logo from "@/assets/logo.svg";

import style from "./index.module.less";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
      <>
        <figure class={style.figure}>
          <img src={logo} />
          <figcaption>常用的 Vue 组件示例</figcaption>
        </figure>
        <router-link class={style.link} to={"/component"}>组件列表</router-link>
      </>
    );
  },
});
