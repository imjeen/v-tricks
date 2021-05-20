import DemoBlock from "./demo/block.vue";
import Frame from "./demo/frame.vue";
import Demo from "./demo/index.vue";
export default function registerComponents(app) {
  app.component("DemoBlock", DemoBlock);
  app.component("Demo", Demo);
  app.component("Frame", Frame);
}
