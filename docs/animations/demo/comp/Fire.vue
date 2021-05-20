<template>
  <div class="demo-fire">
    <div class="fire fire__normal"></div>
    <div class="fire fire__scale"></div>
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
.demo-fire {
  background: #0b1425;
  padding: 30px;
}

.fire {
  background: url(./images/fire2.png) no-repeat;
  background-size: 100% auto;
  width: 210px;
  height: 210px;
  margin: 10px auto;
  animation: 2.6s cubic-bezier(0.075, 0.82, 0.165, 1) infinite -1.8s;

  &__normal {
    animation-name: fireNormal;
    @keyframes fireNormal {
      0% {
        padding: 60px;
        transform: scale(0.5) translateY(0);
        opacity: 1;
      }
      75% {
        padding: 0;
        transform: scale(1) translateY(0);
      }
      100% {
        opacity: 0;
        transform: scale(1) translateY(100px);
      }
    }
  }

  &__scale {
    transform: scale(0.6);
    box-sizing: border-box;
    background-clip: content-box;
    border-radius: 100%;
    animation-name: fireScale;

    @keyframes fireScale {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      90% {
        transform: scale(1);
        padding: 0;
      }
      100% {
        transform: scale(0);
        opacity: 0;
      }
    }
  }
}
</style>
