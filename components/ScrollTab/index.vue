<template>
  <header class="scroll-tab-header">
    <nav class="scroll-tab-nav">
      <template v-for="(item, index) in list" :key="item.id || index">
        <a
          :data-tab="index"
          :class="{ active: index === activeIndex }"
          href="javascript:void(0);"
          @click="onNav(index, $event)"
        >
          <slot :slotProps="{ item, index, active: index === activeIndex }">{{
            item.name || ""
          }}</slot>
        </a>
      </template>
      <!-- <span class="scroll-tab-indicator" /> -->
    </nav>
  </header>
</template>

<script>
// import smoothscroll from "smoothscroll-polyfill";
// // kick off the polyfill!
// smoothscroll.polyfill();
// (window as any).__forceSmoothScrollPolyfill__ = true;

import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { debounce, windowScrollTopTo } from "./utils";

export default {
  name: "ScrollTab",
  props: {
    list: { type: Array, default: () => [] },
    offsetTop: { type: Number, default: 0 },
  },
  data() {
    return {
      offsetY: 0,
      scrolling: false,
      clicking: false,
      activeIndex: 0,
      handleScroll: debounce(this._handleScroll, 100),
    };
  },
  created() {
    document.addEventListener("scroll", this.handleScroll, false);
  },
  mounted() {
    this.offsetY = this.offsetTop || this.$el.clientHeight;
    this.handleScroll();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll, false);
  },
  methods: {
    scrollIntoViewCenter(el) {
      if (!el) return;
      // const smoothable = 'scrollBehavior' in document.documentElement.style;
      const options = {
        behavior: "smooth",
        block: "nearest",
        inline: "center",
        duration: 150,
      };

      return scrollIntoView(el, options);
    },
    _handleScroll() {
      if (this.clicking || this.scrolling) return;

      let active = this.activeIndex;

      [].forEach.call(
        document.querySelectorAll(`[data-target-index]`),
        (item, index, { length }) => {
          const { targetIndex } = item.dataset;
          if (!targetIndex) return;
          const activeIndex = Number(targetIndex);

          let { top, bottom } = item.getBoundingClientRect();
          top = top - this.offsetY;
          bottom = bottom - this.offsetY;
          if (index === 0 && top >= 0) {
            active = activeIndex;
            // console.log(`#view (first)`, index);
          } else if (index === length - 1 && bottom < 0) {
            active = activeIndex;
            // console.log(`#view (last)`, index);
          } else if (top <= 0 && bottom > 0) {
            active = activeIndex;
            // console.log(`#view`, index);
          }
        }
      );

      if (active !== this.activeIndex) {
        this.activeIndex = active;
        const target = this.$el?.querySelector(`[data-tab='${active}']`);

        this.scrollIntoViewCenter(target);
      }
    },
    async onNav(index, e) {
      e.preventDefault();

      if (this.clicking) return;

      this.clicking = true;
      window.setTimeout(() => {
        this.clicking = false;
      }, 300);

      this.activeIndex = index;

      const target = document.querySelector(`[data-target-index='${index}']`);

      try {
        this.scrolling = true;

        const top =
          (target?.getBoundingClientRect().top || 0) +
          window.scrollY -
          this.offsetY +
          1;

        await this.scrollIntoViewCenter(e.target);
        target && (await windowScrollTopTo(top));
      } finally {
        this.scrolling = false;
      }
    },
  },
};
</script>

<style lang="scss">
.scroll-tab {
  &-header {
    position: sticky;
    top: 0;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    overflow: auto hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  &-nav {
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    a {
      scroll-snap-align: start;
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      font-size: 36px;
      color: #000;
      font-weight: 700;
      text-decoration: none;
      padding: 30px 30px;
      &.active {
        background: rgba(255, 20, 146, 0.25);
      }
    }
  }
}
</style>
