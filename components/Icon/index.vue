<template>
  <IconSvg
    v-if="svg || isDefaultSvg"
    :name="name"
    :size="size"
    :color="color"
    @icon-click="onIconClick"
  ></IconSvg>
  <IconFont
    v-else
    :name="name"
    :size="size"
    :color="color"
    @icon-click="onIconClick"
  ></IconFont>
</template>

<script>
import { computed } from "vue";
// @ts-ignore
import IconFont from "./comp/Font.vue";
// @ts-ignore
import IconSvg from "./comp/Svg.vue";

import { DEFAULT_SVG_LIST } from "./utils";

export default {
  name: "Icon",

  components: {
    IconFont,
    IconSvg,
  },

  props: {
    // The icon name
    name: {
      type: String,
      default: "", // spinner, warn-color, success-color, no-result
    },
    // The icon size
    size: {
      type: String,
      default: "md",
    },
    // The icon color
    color: {
      type: String,
      default: "",
    },
    // Whether use SVG icon
    svg: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const isDefaultSvg = computed(() => {
      return !!DEFAULT_SVG_LIST[props.name];
    });

    const onIconClick = (evt) => {
      emit("click", evt);
    };

    return {
      isDefaultSvg,
      onIconClick,
    };
  },
};
</script>

<style lang="scss">
.v-icon {
  background-size: contain;
  fill: currentColor;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0) scale(1, 1);
}
</style>
