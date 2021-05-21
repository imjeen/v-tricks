<template>
  <div class="space">
    <div class="stars">
      <div class="star">
        <div class="tail"></div>
      </div>
      <div class="star pink">
        <div class="tail"></div>
      </div>
      <div class="star blue">
        <div class="tail"></div>
      </div>
      <div class="star yellow">
        <div class="tail"></div>
      </div>
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
.space {
  width: 100%;
  height: 100vh;
  background: #121212;
}
.star {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  /*初始位置*/
  top: 0px;
  left: 10%;
  position: relative;
  transform-origin: 100% 0;
  animation: star-ani 4s 0s infinite ease-out;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.4);
  opacity: 0;
  z-index: 2;
  > .tail {
    top: 0px;
    left: 4px;
    border: 0px solid #fff;
    border-width: 0px 20px 10px 180px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
    transform: rotate(-35deg) translate3d(8px, 6px, 0);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
    transform-origin: 0% 100%;
  }
  &.pink {
    top: 30px;
    left: 30%;
    background: #ff5a99;
    animation-delay: 2s;
    > .tail {
      border-color: transparent transparent transparent #ff5a99;
    }
  }

  &.blue {
    top: 40px;
    left: 60%;
    background: cyan;
    animation-delay: 4s;
    > .tail {
      border-color: transparent transparent transparent cyan;
    }
  }

  &.yellow {
    top: 10px;
    left: 90%;
    background: #ffcd5c;
    animation-delay: 5s;
    > .tail {
      border-color: transparent transparent transparent #ffcd5c;
    }
  }
}

@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) translate3d(0, 0, 0);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate3d(-120vw, 60vh, 0);
  }
}
</style>
