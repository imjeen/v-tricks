<template>
  <div class="demo-falling">
    <div
      v-for="({
        left,
        top,
        animationName,
        animationDuration,
        animationDelay,
        name,
        image,
      },
      index) in list"
      :key="index"
      class=""
      :style="{ left, top, animationName, animationDuration, animationDelay }"
    >
      <span
        :class="['image', `type-${name}`]"
        :style="{
          ...image,
        }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.getList(),
    };
  },
  methods: {
    getList() {
      const randomFloat = (low, high) => low + Math.random() * (high - low);

      return Array(20)
        .fill(0)
        .map(() => {
          const duration = randomFloat(8, 16),
            delay = randomFloat(0, 5);
          return {
            left: `${randomFloat(0, 100)}%`,
            top: `-1rem`,
            animationName: "fade, drop",
            animationDuration: `${duration}s, ${duration}s`,
            animationDelay: `${delay}s, ${delay}s`,
            name: 1 + Math.floor(Math.random() * 4),
            image: {
              animationName:
                Math.random() < 0.5
                  ? "clockwiseSpin"
                  : "counterclockwiseSpinAndFlip",
              animationDuration: `${randomFloat(4, 8)}s`,
            },
          };
        });
    },
  },
  created() {},
};
</script>

<style lang="scss">
.demo-falling {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #000;
  position: relative;
  overflow: hidden;
  > div {
    position: absolute;
    /* 叶子图片的尺寸 */
    width: 100px;
    height: 100px;
    animation-iteration-count: infinite, infinite;
    animation-direction: normal, normal;
    animation-timing-function: linear, ease-in;
    > .image {
      position: absolute;
      width: 100px;
      height: 100px;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      transform-origin: 50% -100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      &.type-1 {
        background-image: url(./images/realLeaf1.png);
      }
      &.type-2 {
        background-image: url(./images/realLeaf2.png);
      }
      &.type-3 {
        background-image: url(./images/realLeaf3.png);
      }
      &.type-4 {
        background-image: url(./images/realLeaf4.png);
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes drop {
  0% {
    transform: translate(0, -1rem);
  }
  100% {
    transform: translate(0, 100vh);
  }
}

@keyframes clockwiseSpin {
  0% {
    transform: rotate(-50deg);
  }
  100% {
    transform: rotate(50deg);
  }
}

@keyframes counterclockwiseSpinAndFlip {
  0% {
    transform: scale(-1, 1) rotate(50deg);
  }
  100% {
    transform: scale(-1, 1) rotate(-50deg);
  }
}
</style>
