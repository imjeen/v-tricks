<template>
  <div class="demo-notify">
    <Button type="success" @click="notifySuccess">Success</Button>
    <Button type="info" @click="notifyInfo">Info</Button>
    <Button type="warning" @click="notifyWarn">Warn</Button>
    <Button type="danger" @click="notifyError">Error</Button>
    <Button type="info" @click="notifyCustom">Custom</Button>
  </div>
</template>

<script>
import Notify from "./index";
export default {
  methods: {
    notifySuccess() {
      Notify.success("成功提示");
    },
    notifyInfo() {
      Notify.info("信息提示");
    },
    notifyWarn() {
      Notify.warn("警告提示");
    },
    notifyError() {
      Notify.error("失败提示");
    },
    notifyCustom() {
      Notify.custom({
        type: "success",
        content: "时间为5s",
        duration: 5000,
      });
    },
  },
};
</script>
<style lang="scss">
.demo-notify {
  padding: 10px 0;
  > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
