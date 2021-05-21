<template>
  <div class="demo-snow">
    <div class="snow foreground"></div>
    <div class="snow foreground layered"></div>
    <div class="snow middleground"></div>
    <div class="snow middleground layered"></div>
    <div class="snow background"></div>
    <div class="snow background layered"></div>
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
.demo-snow {
  position: relative;
  height: 100vh;
  width: 100%;
  background: #0b1d3a;
  overflow: hidden;
  .snow {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    transform: translate3d(0, -100%, 0);
    animation: snow linear infinite;
  }
  .snow.foreground {
    background-image: url(images/snow-foreground.png);
    animation-duration: 15s;
    animation-delay: -10s;
  }
  .snow.foreground.layered {
    animation-delay: -2.5s;
  }
  .snow.middleground {
    background-image: url(./images/snow-middleground.png);
    animation-duration: 20s;
    animation-delay: -10s;
  }
  .snow.middleground.layered {
    animation-delay: -2s;
  }
  .snow.background {
    background-image: url(./images/snow-background.png);
    animation-duration: 30s;
  }
  .snow.background.layered {
    animation-delay: 15s;
  }
}
@keyframes snow {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(15%, 100%, 0);
  }
}
</style>
