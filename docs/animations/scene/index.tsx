import { defineComponent } from "vue";

// @ts-ignore
import Rain from "./comp/Rain.vue";
// @ts-ignore
import Light from "./comp/Light.vue";
// @ts-ignore
import Cloud from "./comp/Cloud.vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1>Animations</h1>

        <h2>下雨🌧️</h2>
        <Rain />

        <h2>灯光🌅</h2>
        <Light />

        <h2>云朵☁️</h2>
        <Cloud />
      </>
    );
  },
});
