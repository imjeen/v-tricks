<template>
  <div class="demo-smoke">
    <div class="smoke bottom"></div>
    <div class="smoke"></div>
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
.demo-smoke {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #204f71;
  overflow: hidden;
  .smoke {
    display: block;
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    height: 50%;
    pointer-events: none;
    animation: smoke 15s linear infinite;
    background: url(./images/smoke.png) 0 100% no-repeat;
    background-size: contain;
    background-position: center;
  }
  .smoke.bottom {
    bottom: -30%;
  }

  @keyframes smoke {
    0% {
      transform: translate(0, 100%);
      opacity: 0;
    }
    50% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-15%, -100%);
      opacity: 0;
    }
  }
}
</style>
