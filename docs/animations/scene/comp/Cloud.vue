<template>
  <div :class="['Cloud', { cloudy }]" @click="cloudy = !cloudy">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cloudy: false,
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.Cloud {
  background-color: #4db0f5;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &.cloudy {
    animation: sky_background 50s ease-out infinite;
  }

  .one,
  .two,
  .three {
    position: absolute;
    left: 0;
    top: 0;
    height: 600px;
    // width: 2250px;
    width: 300%;
    transform: translate3d(0, 0, 0);
    background-position: center bottom;
    background-size: 100% auto;
  }
  .one {
    background-image: url("images/cloud_one.png");
    animation: cloud_one 50s linear infinite;
  }
  .two {
    background-image: url("images/cloud_two.png");
    animation: cloud_two 75s linear infinite;
  }
  .three {
    background-image: url("images/cloud_three.png");
    animation: cloud_three 100s linear infinite;
  }
}

@keyframes sky_background {
  0% {
    background: #646161;
    color: #646161;
  }
  50% {
    background: #3e3c3c;
    color: #3e3c3c;
  }
  100% {
    background: #646161;
    color: #646161;
  }
}

@keyframes cloud_one {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}

@keyframes cloud_two {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}

@keyframes cloud_three {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
</style>
