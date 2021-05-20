import { defineComponent } from "vue";

// @ts-ignore
import Fire from "./comp/Fire.vue";
// @ts-ignore
import Text from "./comp/Text.vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1>Animations</h1>

        <h2>烟火🎆</h2>
        <Fire />

        <h2>文字🔠</h2>
        <Text />
      </>
    );
  },
});
