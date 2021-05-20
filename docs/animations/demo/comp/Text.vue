<template>
  <div class="demo-wrap">
    <section class="demo-text">
      <p>
        【逐字输入】<strong class="button" @click="onTyping">重演▶️</strong>
      </p>
      <p :class="['text-typing', { animation }]">
        逐字动画逐字动画<span>&nbsp;</span>
      </p>
    </section>

    <section class="demo-text">
      <p>
        【逐字进入】<strong class="button" @click="onLiteral">开始▶️</strong>
      </p>
      <p class="text-literal" ref="LITERAL"><span>&nbsp;</span>...</p>
    </section>

    <section class="demo-text">
      <p>【数值增长】<strong class="button" @click="onGrow">开始▶️</strong></p>
      <p class="text-growing">{{ numberGrowth.value }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: true,
      literal: {
        text: `这是一个逐个出现字符串`,
        doing: false,
      },
      numberGrowth: {
        value: 0,
        step: 1,
        end: 100,
        duartion: 200,
      },
    };
  },
  methods: {
    onGrow() {
      const { duartion, step, end } = this.numberGrowth;
      const walk = () => {
        const { value } = this.numberGrowth;
        if (value >= end) return;
        this.numberGrowth.value = value + step > end ? end : value + step;
        const t = setTimeout(() => {
          walk();
          clearTimeout(t);
        }, duartion);
      };
      this.numberGrowth.value = 0;
      walk();
    },
    onTyping() {
      this.animation = false;
      setTimeout(() => {
        this.animation = true;
      }, 100);
    },
    onLiteral() {
      if (this.literal.doing) return;
      this.literal.doing = true;

      const el = this.$refs["LITERAL"];
      const spanTemp = document.createElement("span");
      spanTemp.style.visibility = "hidden";

      const characters = this.literal.text.trim().split("");

      characters.forEach((character, index) => {
        var span = spanTemp.cloneNode();
        span.textContent = character;
        el.appendChild(span);
        span.style.left = "200px";
        span.style.opacity = "0";
        span.style.zIndex = characters.length - index;
        setTimeout(() => {
          span.style.visibility = "visible";
          span.style.left = 0;
          span.style.opacity = 1;
          span.transitionDuration = 600 - 300 * index;

          // end
          if (index + 1 === characters.length) {
            this.literal.doing = false;
          }
        }, index * 300);
      });
    },
  },
  created() {},
};
</script>

<style lang="scss">
.demo-text {
  background-color: #666;
  width: 90%;
  padding: 30px;
  margin: 20px auto;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eaeefb;
  box-shadow: 0 6px 18px 0 rgba(232, 237, 250, 0.5);
  .button {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #fff;
    color: #2e2e2e;
    font-size: 24px;
    text-align: left;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    white-space: nowrap;
  }
}

.text-typing {
  width: 8.2em;
  letter-spacing: 0.02em;
  line-height: 1.2;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  margin: 0;
  border-right: 0.05em solid transparent;
  &.animation {
    animation: typing 2s steps(8) forwards, caret 0.8s steps(1) infinite;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes caret {
    50% {
      border-color: currentColor;
    }
  }
}

.text-literal {
  background-color: #666;
  width: 100%;
  padding: 20px;
  color: #fff;
  font-size: 22px;
  box-shadow: 1px 1px 3px #333;
  & > span {
    position: relative;
    /* 背景颜色要和整体图片一样，以此盖住下一个文字 */
    background-color: #666;
    transition: all 0.6s ease-out;
  }
}
</style>
