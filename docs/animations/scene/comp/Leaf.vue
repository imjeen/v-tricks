<template>
  <div class="Leaf">
    <div class="V-leaf one">
      <div class="M-leaf one">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="V-leaf two">
      <div class="M-leaf two">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="V-leaf three">
      <div class="M-leaf three">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="V-leaf one rt">
      <div class="M-leaf one">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="V-leaf two rt">
      <div class="M-leaf two">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="V-leaf three rt">
      <div class="M-leaf three">
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
        <div class="piece"></div>
      </div>
    </div>
    <div class="tree-star">
      <div class="tree-star-0"></div>
      <div class="tree-star-1"></div>
      <div class="tree-star-2"></div>
      <div class="tree-star-3"></div>
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
.Leaf {
  position: relative;
  height: 400px;
  width: 100%;
  background: black;
  overflow: hidden;
}
.V-leaf.one {
  position: absolute;
  left: 0;
  top: 1.1rem;
}
.M-leaf.one {
  animation: leafRoot_1 4s ease-in-out infinite;
  transform-origin: 0% 0%;
  background: url(./images/leaf.png) no-repeat;
  background-size: 3rem auto;
  width: 3rem;
  height: 1.44rem;
}
@keyframes leafRoot_1 {
  50% {
    transform: rotate(8deg);
  }
}
.M-leaf.one .piece {
  background: url(./images/leaf.png) no-repeat;
  background-size: 3rem auto;
  position: absolute;
}
.M-leaf.one .piece:nth-child(1) {
  animation: leafPiece_1 4s ease-in-out infinite 0.5s;
  transform-origin: 0% 0%;
  background-position: 0 -1.54rem;
  width: 0.42rem;
  height: 0.48rem;
  left: 1.56rem;
  top: 0.5rem;
}
@keyframes leafPiece_1 {
  50% {
    transform: rotate(20deg);
  }
}
.M-leaf.one .piece:nth-child(2) {
  animation: leafPiece_2 3s ease-in-out infinite 0.5s;
  transform-origin: 0.01rem 0%;
  background-position: -0.54rem -1.54rem;
  width: 0.16rem;
  height: 0.64rem;
  left: 2.13rem;
  top: 0.68rem;
}
@keyframes leafPiece_2 {
  50% {
    transform: rotate(-10deg);
  }
}
.M-leaf.one .piece:nth-child(3) {
  animation: leafPiece_3 4s ease-in-out infinite 1s;
  transform-origin: 0% 0%;
  background-position: -0.88rem -1.54rem;
  width: 0.36rem;
  height: 0.44rem;
  left: 2.48rem;
  top: 0.86rem;
}
@keyframes leafPiece_3 {
  50% {
    transform: rotate(18deg);
  }
}
.M-leaf.one .piece:nth-child(4) {
  animation: leafPiece_4 3.8s ease-in-out infinite 0.5s;
  transform-origin: 0% 0.08rem;
  background-position: -1.44rem -1.54rem;
  width: 0.52rem;
  height: 0.14rem;
  left: 2.4rem;
  top: 0.7rem;
}
@keyframes leafPiece_4 {
  50% {
    transform: rotate(15deg);
  }
}
.M-leaf.one .piece:nth-child(5) {
  animation: leafPiece_5 3.4s ease-in-out infinite -0.5s;
  transform-origin: 0% 0.2rem;
  background-position: -2.08rem -1.54rem;
  width: 0.64rem;
  height: 0.16rem;
  left: 1.96rem;
  top: 0.4rem;
}
@keyframes leafPiece_5 {
  50% {
    transform: rotate(-12deg);
  }
}

.V-leaf.two {
  position: absolute;
  left: 0;
  top: 0.35rem;
  // top:2.72rem;
}
.M-leaf.two {
  animation: leafRoot_2 6s ease-in-out infinite;
  transform-origin: 0% 100%;
  background: url(./images/leaf.png) no-repeat 0 -2.4rem;
  background-size: 3rem auto;
  width: 2.18rem;
  height: 1.32rem;
}
@keyframes leafRoot_2 {
  50% {
    transform: rotate(6deg);
  }
}

.M-leaf.two .piece {
  background: url(./images/leaf.png) no-repeat;
  background-size: 3rem auto;
  position: absolute;
}

.M-leaf.two .piece:nth-child(1) {
  animation: leafPiece_1 6s ease-in-out infinite 0.8s;
  transform-origin: 0% 0.1rem;
  background-position: -2.2rem -2.4rem;
  width: 0.72rem;
  height: 0.2rem;
  left: 1.7rem;
  top: 0.388rem;
}
.M-leaf.two .piece:nth-child(2) {
  animation: leafPiece_6 5.4s ease-in-out infinite 0.8s;
  transform-origin: 0% 0%;
  background-position: -2.2rem -2.68rem;
  width: 0.58rem;
  height: 0.58rem;
  left: 1.26rem;
  top: 0.62rem;
}
@keyframes leafPiece_6 {
  50% {
    transform: rotate(8deg);
  }
}
.M-leaf.two .piece:nth-child(3) {
  animation: leafPiece_6 6s ease-in-out infinite 1s;
  transform-origin: 0% 0%;
  background-position: -2.2rem -3.3rem;
  width: 0.8rem;
  height: 0.22rem;
  left: 0.6rem;
  top: 1rem;
}
.M-leaf.two .piece:nth-child(4) {
  animation: leafPiece_2 5s ease-in-out infinite;
  transform-origin: 0% 100%;
  background-position: -2.2rem -3.58rem;
  width: 0.46rem;
  height: 0.68rem;
  left: 0.9rem;
  top: 0.1rem;
}
.M-leaf.two .piece:nth-child(5) {
  animation: leafPiece_1 6s ease-in-out infinite 1s;
  transform-origin: 0% 100%;
  background-position: -2.2rem -4.28rem;
  width: 0.4rem;
  height: 0.52rem;
  left: 1.52rem;
  top: 0.04rem;
}

.V-leaf.three {
  position: absolute;
  left: 0;
  // top:4.06rem;
  top: 1.6rem;
}
.M-leaf.three {
  animation: leafRoot_1 5s ease-in-out infinite 0.5s;
  transform-origin: 0% 0%;
  background: url(./images/leaf.png) no-repeat 0 -4.78rem;
  background-size: 3rem auto;
  width: 3rem;
  height: 1.58rem;
}

.M-leaf.three .piece {
  background: url(./images/leaf.png) no-repeat;
  background-size: 3rem auto;
  position: absolute;
}
.M-leaf.three .piece:nth-child(1) {
  animation: leafPiece_1 5s ease-in-out infinite 1s;
  transform-origin: 0% 0.04rem;
  background-position: -1.1rem -6.4rem;
  width: 0.36rem;
  height: 0.5rem;
  right: 0;
  top: 1rem;
}
.M-leaf.three .piece:nth-child(2) {
  animation: leafPiece_1 5s ease-in-out infinite 1.3s;
  transform-origin: 0% 0%;
  background-position: -1.48rem -6.4rem;
  width: 0.52rem;
  height: 0.14rem;
  right: -0.08rem;
  top: 0.86rem;
}
.M-leaf.three .piece:nth-child(3) {
  animation: leafPiece_4 5.4s ease-in-out infinite 1.6s;
  transform-origin: 0% 0%;
  background-position: -2.2rem -6.4rem;
  width: 0.4rem;
  height: 0.5rem;
  left: 1.74rem;
  top: 0.56rem;
}
.M-leaf.three .piece:nth-child(4) {
  animation: leafPiece_7 4.5s ease-in-out infinite 1s;
  transform-origin: 0.12rem 0%;
  background-position: -2.8rem -6.4rem;
  width: 0.18rem;
  height: 0.62rem;
  right: 0.54rem;
  top: 0.76rem;
}
@keyframes leafPiece_7 {
  50% {
    transform: rotate(-8deg);
  }
}
@keyframes leafPiece_8 {
  50% {
    transform: rotate(12deg);
  }
}
.M-leaf.three .piece:nth-child(5) {
  animation: leafPiece_8 5s ease-in-out infinite 1s;
  transform-origin: 0% 0%;
  background-position: 0 -6.4rem;
  width: 1.04rem;
  height: 1.04rem;
  left: 0.74rem;
  top: 0.04rem;
}

.V-leaf.one.rt {
  right: -0.55rem;
  top: 0.5rem;
  // right:-1rem;
  left: auto;
  // top:2.8rem;
  transform: rotateY(-180deg) rotateZ(-40deg);
}
.V-leaf.one.rt .piece:nth-child(2) {
  display: none;
}
.V-leaf.one.rt .piece:nth-child(1) {
  left: 1.5rem;
  top: 0.4rem;
}
.V-leaf.one.rt .piece:nth-child(5) {
  left: 1.8rem;
  top: 0.36rem;
}
.V-leaf.one.rt .piece:nth-child(4) {
  left: 2.56rem;
  top: 0.82rem;
}

.V-leaf.two.rt {
  right: 0;
  left: auto;
  // top:3.4rem;
  top: 1rem;
  transform: rotateY(-180deg) rotateZ(20deg);
}
.V-leaf.two.rt .piece:nth-child(3) {
  left: 0.4rem;
  top: 1rem;
}
.V-leaf.three.rt {
  right: -1rem;
  top: 1.9rem;
  // right:-1.4rem;
  left: auto;
  // top:4.4rem;
  transform: rotateY(-180deg) rotateZ(-10deg);
}
.V-leaf.three.rt .piece:nth-child(5) {
  display: none;
}
</style>
