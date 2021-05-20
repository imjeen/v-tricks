import { defineComponent } from "vue";

import Icon from "@lib/Icon/index.vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <Icon name="location" size="lg" />
        <Icon name="triangle" color="orange" />
      </>
    );
  },
});
