<template>
  <div :class="{ 'tab-banner-wrap': true, 'is-fixed': is_fixed }">
    <nav class="tab-banner">
      <ul class="tab-list cl" :style="{ width: tab_width || 'auto' }">
        <li
          v-for="(item, key) in value"
          @click="onTab(item.id, $event)"
          :data-key="item.id"
          :class="{
            'tab-item': true,
            'is-active': String(item.id) === String(active_key),
          }"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
function debounce(fn, delay) {
  var timer = null;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

export default {
  name: "TabGroup",
  props: {
    value: { type: Array, default: () => [] },
  },
  data() {
    return {
      active_key: 0,
      tab_width: "",
      is_fixed: false,
    };
  },
  computed: {},
  methods: {
    async init() {
      await this.$nextTick();
      let width = Array.prototype.map
        .call(this.$el.querySelectorAll("li"), (el) => el.offsetWidth)
        .reduce((pre, cur) => {
          return pre + cur + 5;
        });
      this.tab_width = width + "px";
    },
    scrollToKey(key) {
      // page scroll
      let $page_target = this.$parent.$el.querySelector(
        `.card-wrap[data-key='${key}']`
      );
      if ($page_target) {
        // console.log('$page_target', $page_target);
        let top = $page_target.offsetTop;
        window.scrollTo({
          top: top - this.$el.offsetHeight - 20,
          behavior: "smooth",
        });
      }
    },
    onTab(key, $event) {
      let $item = $event.target;
      let $scroll = $item.parentElement.parentElement;

      let {
        left: item_left,
        width: item_width,
      } = $item.getBoundingClientRect();
      let middle = this.$el.offsetWidth / 2,
        left = $scroll.scrollLeft;
      left = left + item_left - middle + item_width / 2;

      // console.log('left', left);
      $scroll.scrollTo({
        left: left,
        behavior: "smooth",
      });

      if ($event.isTrusted) {
        this.scrollToKey(key);
        this.active_key = key;
      }
    },
    handleScroll(e) {
      // console.log('#1');
      let height = this.$el.offsetHeight + window.screen.height / 3;
      if (window.scrollY <= height) {
        this.is_fixed = false;
      } else {
        this.is_fixed = true;
      }
      let $card = Array.prototype.find.call(
        this.$parent.$el.querySelectorAll(`.card-wrap[data-key]`),
        (item) => {
          let thredhold = this.$el.scrollHeight;
          let { top, bottom, height } = item.getBoundingClientRect();

          if ((top > 0 || top > thredhold) && top < window.innerHeight) {
            if (bottom < window.innerHeight) {
              return true;
            }

            if (top < window.innerHeight / 2) {
              return true;
            }

            return false;
          }

          if (top < thredhold) {
            if (bottom > window.innerHeight) {
              return true;
            }
          }

          return false;
        }
      );

      if ($card) {
        this.active_key = $card.dataset.key;
        let $item = this.$el.querySelector(`li[data-key='${this.active_key}']`);
        // console.log(`this.active_key`, $card.dataset.key, $card);
        $item && $item.click();
      }
    },
  },
  created() {
    this.handler_scroll = debounce(this.handleScroll, 50);
    window.addEventListener("scroll", this.handler_scroll, false);
  },
  async mounted() {
    await this.$nextTick();
    this.init();
    this.active_key = (this.value[0] || {}).id || "";
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  },
  beforeDestroyed() {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
};
</script>

<style lang="scss">
.tab-banner-wrap {
  position: sticky;
  top: 0;
  height: 88px;
  z-index: 100;
  background-color: rgba(33, 29, 29, 0.8);
}
.tab-banner {
  display: block;
  overflow-y: auto;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
    background: transparent;
  }
  .tab-list {
    color: #fff;
    font-size: 24px;
    width: 150vw;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    .tab-item {
      height: 100%;
      float: left;
      padding: 28px 36px 0;
      transition: all 0.15s ease-in-out;
      cursor: pointer;
      // font-size: 34px;

      &:after {
        content: "";
        display: block;
        padding-top: 12px;
        border-bottom: 6px solid transparent;
      }

      &.is-active {
        // padding-top: 20px;
        // font-size: 32px;
        font-weight: 800;
        &:after {
          border-bottom-color: #fc1c3a;
        }
      }
    }
  }
}
</style>
