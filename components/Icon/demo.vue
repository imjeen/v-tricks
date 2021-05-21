<template>
  <div class="demo-icon">
    <h2>基础用法</h2>
    <Icon type="up"></Icon>
    <Icon type="down"></Icon>
    <Icon type="left"></Icon>
    <Icon type="right"></Icon>
    <Icon type="search"></Icon>
    <Icon type="person"></Icon>
    <Icon type="info"></Icon>
    <Icon type="refresh"></Icon>
    <Icon type="wifi"></Icon>
    <Icon type="setting"></Icon>
    <Icon type="download"></Icon>
    <Icon type="wechat"></Icon>
    <h2>内置图标</h2>
    <ListIcon />
  </div>
</template>

<script>
import "./fonts/iconfont.css";
import ListIcon from "./comp/list.vue";
export default {
  components: { ListIcon },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.demo-icon {
  > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
