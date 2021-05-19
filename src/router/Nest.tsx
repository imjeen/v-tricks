import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "Nest",
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
