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

        <h2>δΈι¨π§οΈ</h2>
        <Rain />

        <h2>δΈιͺβοΈ</h2>
        <Snow />

        <h2>δΊζ΅βοΈ</h2>
        <Cloud />

        <h2>ιΎζ°π</h2>
        <Smoke />

        <h2>η―επ</h2>
        <Light />

        <h2>ι£θ½π</h2>
        <Falling />

        <h2>εΆε­π</h2>
        <Leaf />

        <h2>ζ°΄ζ³’π</h2>
        <Wave />

        <h2>ζ΅ζπ </h2>
        <Meteor />
      </>
    );
  },
});
