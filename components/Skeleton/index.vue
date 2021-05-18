<template>
  <div class="skeleton">
    <section v-for="n in repeat" :key="n" class="skeleton__section">
      <div
        v-if="avatar || name"
        class="skeleton__left"
        :style="{ width: leftWidth }"
      >
        <div v-if="avatar" class="skeleton__avatar" />
        <div v-if="name" class="skeleton__name" />
      </div>
      <div class="skeleton__content">
        <h3 class="skeleton__title" :style="{ width: titleWidth }" />
        <div
          v-for="(width, index) in resultRows"
          :key="index"
          :style="{ width }"
          class="skeleton__row"
        />
      </div>
    </section>
  </div>
</template>

<script>
// This is a description of the component
export default {
  name: "Skeleton",
  props: {
    // 头像
    avatar: { type: Boolean, default: true },
    // 左半宽度
    leftWidth: { type: String, default: "25%" },
    // 标题
    title: { type: Boolean, default: true },
    // 名称
    name: { type: Boolean, default: true },
    // 行数
    rows: { type: Number, default: 3 },
    // 行宽
    rowsWidth: { type: [String, Array], default: "100%" },
    // 重复次数
    repeat: { type: Number, default: 3 },
  },
  data() {
    return {};
  },
  computed: {
    resultRows() {
      const list = [...Array(this.rows)],
        length = list.length;
      return list.map((_, i) => {
        const rowWidth = [].concat(this.rowWidth);
        const defaultWidth = length > 1 && i + 1 === length ? "70%" : "100%";
        return rowWidth[i] || defaultWidth;
      });
    },
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.skeleton {
  width: 100%;
  animation: skeleton-blink 1.2s ease-in-out infinite;

  &__section {
    display: flex;
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
    &:first-of-type {
      padding-top: 16px;
    }
  }

  &__left {
    flex-shrink: 0;
    margin-right: 20px;
    width: 120px;
  }
  &__avatar {
    width: 120px;
    height: 120px;
    border-radius: 15px;
    margin: 0 auto;
    background-color: #f2f3f5;
  }

  &__name {
    height: 36px;
    background-color: #f2f3f5;
    width: 100%;
    max-width: 150px;
    margin: 20px auto 0;
  }

  &__content {
    width: 100%;
  }

  &__title {
    height: 45px;
    background-color: #f2f3f5;
    width: 40%;
    margin: 0;
  }
  &__row {
    height: 45px;
    background-color: #f2f3f5;
    margin-top: 20px;
  }
}

@keyframes skeleton-blink {
  50% {
    opacity: 0.6;
  }
}
</style>
