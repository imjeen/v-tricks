import { defineComponent, PropType, computed } from "vue";
import "./styles.scss";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger";
export type ButtonSize = "normal" | "small" | "large";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default" as ButtonType,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "normal" as ButtonSize,
    },
    htmlType: String as PropType<"button" | "submit" | "reset">,
    block: Boolean,
    round: Boolean,
    disabled: Boolean,
    loading: Boolean,
    onClick: Function as PropType<(e: Event) => any>,
    href: String,
  },
  setup(props, { slots }) {
    const useLink = computed(() => !!props.href);
    const btnClass = computed(() => [
      "Button",
      `Button-${props.type}`,
      {
        [`Button-size-${props.size}`]: props.size !== "normal",
        "Button-disabled": !props.loading && props.disabled,
        "Button-loading": props.loading,
        "Button-round": props.round,
        "Button-block": props.block,
      },
    ]);

    const onClick = (e: MouseEvent) => {
      if (props.disabled || props.loading) {
        return;
      }
      props.onClick?.(e);
    };

    return () =>
      useLink.value ? (
        <a
          class={btnClass.value}
          href={props.disabled ? undefined : props.href}
          onClick={onClick}
        >
          {slots.default?.()}
        </a>
      ) : (
        <>
          <button
            type={props.htmlType}
            class={btnClass.value}
            disabled={props.disabled || props.loading}
            onClick={onClick}
          >
            {slots.default?.()}
          </button>
        </>
      );
  },
});
