<template>
  <div class="barrage">
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="{ active: true }">
        <span class="barrage__text">{{ item }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Barrage",
  props: {
    list: { type: String, default: "" },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.barrage {
  line-height: normal;
  position: relative;
  min-height: 100px;
  overflow: hidden;
  height: 56px;
  width: 100%;
  transform: translateZ(0);

  ul {
    display: inline-block;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    perspective: 1000;
    backface-visibility: hidden;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-duration: 4s;
    animation-name: danmu;
    @keyframes danmu {
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }

    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 28px;
      height: 56px;
      padding: 15px;
      margin-right: 48px;
      background-color: rgba(12, 0, 0, 0.6);
      border: 1px solid rgba(12, 0, 0, 0.6);
      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__text {
    font-size: 25px;
    color: #fff;
    white-space: nowrap;
  }
}
</style>
