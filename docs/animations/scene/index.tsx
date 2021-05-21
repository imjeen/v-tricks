import { defineComponent } from "vue";

// @ts-ignore
import Rain from "./comp/Rain.vue";
// @ts-ignore
import Light from "./comp/Light.vue";
// @ts-ignore
import Cloud from "./comp/Cloud.vue";
// @ts-ignore
import Leaf from "./comp/Leaf.vue";
// @ts-ignore
import Meteor from "./comp/Meteor.vue";
// @ts-ignore
import Wave from "./comp/Wave.vue";
// @ts-ignore
import Smoke from "./comp/Smoke.vue";
// @ts-ignore
import Snow from "./comp/Snow.vue";
// @ts-ignore
import Falling from "./comp/Falling.vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1>Animations</h1>

        <h2>下雨🌧️</h2>
        <Rain />

        <h2>下雪❄️</h2>
        <Snow />

        <h2>云朵☁️</h2>
        <Cloud />

        <h2>雾气🌁</h2>
        <Smoke />

        <h2>灯光🌅</h2>
        <Light />

        <h2>飘落🍂</h2>
        <Falling />

        <h2>叶子🍃</h2>
        <Leaf />

        <h2>水波🌊</h2>
        <Wave />

        <h2>流星🌠</h2>
        <Meteor />
      </>
    );
  },
});
