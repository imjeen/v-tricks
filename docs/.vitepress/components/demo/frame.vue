<template>
  <main class="frame-main">
    <div class="aside"><slot /></div>
    <section>
      <header>
        <img
          alt="presentation"
          src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png"
        />
        <p>{{ url }}</p>
      </header>
      <iframe :src="url" frameborder="0" width="100%" />
    </section>
  </main>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  getCurrentInstance,
} from "vue";
export default {
  name: "Frame",
  props: ["hashPath"],
  setup(props, context) {
    const vm = getCurrentInstance();
    const pathArr = vm.appContext.config.globalProperties.$page.relativePath.split(
      "/"
    );
    pathArr.shift();
    pathArr.pop();

    const url = `${
      location.hostname === "localhost"
        ? "http://localhost:3001"
        : location.origin
    }/v-tricks/#/component/${pathArr.join("/")}`;

    return { url };
  },
};
</script>

<style lang="scss">
.frame-main {
  display: flex;
  > .aside {
    flex: 1;
    width: 1px;

    div[class*="language-"] {
      overflow: auto;
      border-radius: 6px;
      max-height: 620px;
    }
  }
  > section {
    margin: 1rem 0 1rem 24px;
    width: 377px;
    header {
      border-radius: 4px 4px 0 0;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(55, 55, 55, 0.98)),
        to(#545456)
      );
      background: -webkit-linear-gradient(rgba(55, 55, 55, 0.98), #545456);
      background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
      text-align: center;
      padding-bottom: 15px;
      padding-top: 15px;
      img {
        width: 350px;
        margin-bottom: 10px;
      }
      p {
        width: 350px;
        height: 25px;
        line-height: 28px;
        color: #fff;
        background-color: #a2a2a2;
        margin: 0 auto;
        border-radius: 4px;
        white-space: nowrap;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    iframe {
      width: 377px;
      height: 548px;
      border-top: none;
      border-right: 1px solid rgb(247, 247, 247);
      border-bottom: 1px solid rgb(247, 247, 247);
      border-left: 1px solid rgb(247, 247, 247);
      border-image: initial;
      box-shadow: rgb(235 235 235) 0px 2px 4px;
    }
  }
}
</style>
