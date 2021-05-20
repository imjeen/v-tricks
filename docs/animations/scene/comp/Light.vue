<template>
  <div class="Light">
    <div class="left"></div>
    <div class="right"></div>
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
.Light {
  background-color: #333;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  .left {
    transform-origin: left 0.3rem;
    animation: lightLeft 3s ease-in-out infinite;
    background: url(./images/light0.png) no-repeat;
    background-size: 100% auto;
    width: 364px;
    height: 792px;
    position: absolute;
    left: 0;
    top: 1.3rem;
  }
  .right {
    transform-origin: 98% top;
    animation: lightRight 3.2s ease-in-out infinite;
    background: url(./images/light1.png) no-repeat;
    background-size: 100% auto;
    width: 520px;
    height: 1000px;
    position: absolute;
    right: 0;
    top: 0;
  }
}

@keyframes lightRight {
  0%,
  100% {
    -webkit-transform: rotate(-8deg);
  }
  40% {
    -webkit-transform: rotate(6deg);
  }
}

@keyframes lightLeft {
  0%,
  100% {
    -webkit-transform: rotate(12deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
  }
}
</style>
