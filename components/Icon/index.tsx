import { defineComponent, PropType } from "vue";
import "./fonts/iconfont.css";

export default defineComponent({
  name: "Icon",
  props: {
    type: String,
    custom: Boolean,
    onClick: Function as PropType<(e: MouseEvent) => any>,
  },
  setup(props) {
    return () => {
      if (props.custom) {
        return (
          <i
            class={["iconfont", `icon-${props.type}`]}
            onClick={props.onClick}
          ></i>
        );
      }
      return (
        <i
          class={["Icon", `icon-${props.type}`]}
          onClick={props.onClick}
        ></i>
      );
    };
  },
});
