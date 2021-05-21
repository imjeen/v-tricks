<template>
  <div class="demo-input">
    <h2>基础用法</h2>
    <Input placeholder="最多输入15字" maxlength="15" />
    <h2>带图标</h2>
    <Input icon="search" placeholder="搜索" />
    <h2>带前后缀</h2>
    <Input inline>
      <template #prepend>$</template>
    </Input>
    <Input inline>
      <template #append>.00</template>
    </Input>
    <Input icon="search" inline>
      <template #prepend>love</template>
      <template #append>.com</template>
    </Input>
    <h2>大号一点</h2>
    <Input size="large" placeholder="最多输入15字" maxlength="15" inline />
    <Input size="large" icon="search" placeholder="搜索" inline />
    <Input size="large" inline>
      <template #prepend>$</template>
    </Input>
    <h2>小号一点</h2>
    <Input size="small" placeholder="最多输入15字" maxlength="15" inline />
    <Input size="small" icon="search" placeholder="搜索" inline />
    <Input size="small" inline>
      <template #prepend>$</template>
    </Input>
    <h2>占满宽度</h2>
    <Input placeholder="请输入文章标题" size="large" block />
    <h2>错误样式</h2>
    <Input placeholder="有问题..." inline hasError />
    <Input icon="search" placeholder="带图标" inline hasError />
    <h2>禁用</h2>
    <Input placeholder="不可编辑" disabled />
    <h2>只读</h2>
    <Input modelValue="只读" readonly />
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
.demo-input {
  padding: 10px;
}
</style>
