<template>
  <div class="demo-button">
    <h2>基础用法</h2>
    <Button href="https://www.baidu.com/">Link</Button>
    <Button type="primary">primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="danger" round>Round</Button>
    <h2>尺寸</h2>
    <Button size="small">small</Button>
    <Button size="normal">normal</Button>
    <Button size="large">large</Button>
    <h2>加载中</h2>
    <Button type="default" loading>Default</Button>
    <Button type="primary" loading>Primary</Button>
    <Button type="success" loading>Success</Button>
    <Button type="info" loading>Info</Button>
    <Button type="warning" loading>Warning</Button>
    <Button type="danger" loading>Danger</Button>
    <Button type="danger" loading round>Round</Button>
    <br />
    <br />
    <Button size="small" loading>small</Button>
    <Button size="normal" loading>normal</Button>
    <Button size="large" loading>large</Button>
    <h2>禁用</h2>
    <Button type="default" disabled>disabled</Button>
    <Button type="primary" disabled>disabled</Button>
    <Button type="success" disabled>disabled</Button>
    <Button type="info" disabled>disabled</Button>
    <Button type="warning" disabled>disabled</Button>
    <Button type="danger" disabled>disabled</Button>
    <h2>块级</h2>
    <p><Button type="default" block>块级按钮</Button></p>
    <p><Button type="primary" block>块级按钮</Button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.demo-button {
  padding: 10px 0;
  > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
