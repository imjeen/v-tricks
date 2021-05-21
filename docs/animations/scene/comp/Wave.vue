<template>
  <div class="Wave">
    <div class="wave-1">
      <div class="mask"></div>
    </div>
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
.Wave {
  .wave-1 {
    background: #feaff7;
    width: 400px;
    height: 500px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    .mask {
      width: 600px;
      height: 600px;
      background: #fff;
      transform-origin: 50% 52%;
      border-radius: 60% 50% 60% 50%;
      position: absolute;
      top: -500px;
      left: 0;
      margin-left: -100px;
      animation: wave-1 3s linear infinite;
    }
  }
}

@keyframes wave-1 {
  to {
    transform: rotate(1turn);
  }
}
</style>
