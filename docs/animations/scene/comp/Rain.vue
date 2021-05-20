<template>
  <div class="Rain">
    <div class="layer-back">
      <div
        v-for="({ left, bottom, animationDelay, animationDuration },
        index) in list"
        class="drop"
        :key="index"
        :style="{
          left,
          bottom,
          animationDelay,
          animationDuration,
        }"
      >
        <div
          class="stem"
          :style="{
            animationDelay,
            animationDuration,
          }"
        ></div>
        <div
          class="splat"
          :style="{
            animationDelay,
            animationDuration,
          }"
        ></div>
      </div>
    </div>
    <div class="layer-font">
      <div
        v-for="({ right, bottom, animationDelay, animationDuration },
        index) in list"
        class="drop"
        :key="index"
        :style="{
          right,
          bottom,
          animationDelay,
          animationDuration,
        }"
      >
        <div
          class="stem"
          :style="{
            animationDelay,
            animationDuration,
          }"
        ></div>
        <div
          class="splat"
          :style="{
            animationDelay,
            animationDuration,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.getRandomList(),
    };
  },
  methods: {
    getRandomList() {
      let increment = 0;
      const list = [];
      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * 100 + 1);
        const randoFiver = Math.floor(Math.random() * 4 + 2);

        increment += randoFiver;

        list.push({
          left: `${increment}%`,
          right: `${increment}%`,
          bottom: `${2 * randoFiver - 1 + 100}%`,
          animationDelay: `${Number(`0.${randoHundo}`)}s`,
          animationDuration: `${0.5 + Number(`0.${randoHundo}`)}s`,
        });
      }
      return list;
    },
  },
  created() {},
};
</script>

<style lang="scss">
.Rain {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #000;
  position: relative;
  overflow: hidden;

  .layer-font,
  .layer-back {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .layer-back {
    opacity: 0.3;
  }

  .drop {
    position: absolute;
    bottom: 100%;
    // prettier-ignore
    width: 15PX;
    // prettier-ignore
    height: 120PX;
    pointer-events: none;
    animation: drop 1s linear infinite;
    .stem {
      // prettier-ignore
      width: 2PX;
      height: 60%;
      // prettier-ignore
      margin-left: 7PX;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.25)
      );
      animation: stem 0.5s linear infinite;
    }
    .splat {
      // prettier-ignore
      width: 15PX;
      // prettier-ignore
      height: 10PX;
      // prettier-ignore
      border-top: 4PX dotted rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      opacity: 1;
      transform: scale(0);
      animation: splat 0.5s linear infinite;
      display: block;
    }
  }
  @keyframes drop {
    0% {
      transform: translateY(0vh);
    }
    75% {
      transform: translateY(90vh);
    }
    100% {
      transform: translateY(90vh);
    }
  }

  @keyframes stem {
    0% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes splat {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      transform: scale(0);
    }
    90% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }
}
</style>
