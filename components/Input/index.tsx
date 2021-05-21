import {
  defineComponent,
  PropType,
  InputHTMLAttributes,
  ref,
  watch,
} from "vue";
import Icon from "../Icon";
import "./index.scss";

const Input = defineComponent({
  name: "Input",
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<InputHTMLAttributes["type"]>,
      default: "text",
    },
    icon: String,
    inline: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "normal" | "large">,
      default: "normal",
    },
    maxlength: [String, Number],
    max: Number,
    min: Number,
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    name: String,
    placeholder: String,
    modelValue: String,
    onFocus: Function as PropType<(e: FocusEvent) => void>,
    onBlur: Function as PropType<(e: FocusEvent) => void>,
    onPressEnter: Function as PropType<(e: KeyboardEvent) => void>,
    onPressCtrlEnter: Function as PropType<(e: KeyboardEvent) => void>,
    onKeypress: Function as PropType<(e: KeyboardEvent) => void>,
    onKeydown: Function as PropType<(e: KeyboardEvent) => void>,
    onKeyup: Function as PropType<(e: KeyboardEvent) => void>,
    onChange: Function as PropType<(e: Event) => void>,
    onInput: Function as PropType<(e: Event) => void>,
  },
  setup(props, { emit, slots }) {
    const value = ref(props.modelValue);

    watch(value, (value) => {
      emit("update:modelValue", value);
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      }
    );

    const onInput = (e: KeyboardEvent) => {
      value.value = (e.target as HTMLInputElement).value;
      props.onInput?.(e);
    };

    const onKeyup = (e: KeyboardEvent) => {
      props.onKeyup?.(e);
      if (e.key === "Enter" && e.ctrlKey) {
        props.onPressCtrlEnter?.(e);
      } else if (e.key === "Enter") {
        props.onPressEnter?.(e);
      }
    };

    return () => {
      const input = (
        <input
          class="Input"
          type={props.type}
          maxlength={props.maxlength ? +props.maxlength : undefined}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readonly}
          name={props.name}
          autofocus={props.autofocus}
          value={value.value}
          min={props.min}
          max={props.max}
          // @ts-ignore
          onInput={onInput}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onKeyup={onKeyup}
          onKeypress={props.onKeypress}
          onKeydown={props.onKeydown}
          onChange={props.onChange}
        />
      );

      return (
        <div
          class={[
            "Input-wrapper",
            {
              "Input-inline": props.inline,
              "Input-block": props.block,
              "Input-large": props.size === "large",
              "Input-small": props.size === "small",
              "has-error": props.hasError,
              "has-icon": !!props.icon,
            },
          ]}
        >
          {slots.prepend ? (
            <div class="Input-addon Input-addon-prepend">
              {slots.prepend()}
            </div>
          ) : null}
          {props.icon ? (
            <div class="Input-icon-wrapper">
              <span class="Input-icon">
                <Icon type={props.icon} />
              </span>
              {input}
            </div>
          ) : (
            input
          )}
          {slots.append ? (
            <div class="Input-addon Input-addon-append">
              {slots.append()}
            </div>
          ) : null}
        </div>
      );
    };
  },
  methods: {
    focus() {
      this.$el.querySelector(".Input")?.focus();
    },
  },
});

export default Input;
