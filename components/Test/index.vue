<template>
  <div class="Test">TEST: {{ title }}</div>
</template>

<script>
// 仅作为测试
export default {
  name: "Test",
  props: {
    // 标题名称
    title: { type: String, default: "OK" },
  },
  data() {
    return {};
  },
  methods: {
    // @vuese
    // 举例说明
    // @arg 参数说明:`type`类型
    onAction(type) {
      console.log(type);
    },
    clear() {
      // 方法描述
      // @arg 参数说明
      this.$emit("onclear", true);
    },
  },
  created() {},
};
</script>

<style lang="scss">
.Test {
  padding: 10px;
  outline: 2px dashed red;
  text-align: center;
}
</style>
