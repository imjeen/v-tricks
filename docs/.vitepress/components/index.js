import DemoBlock from "../components/demo/block.vue";
import Demo from "../components/demo/index.vue";
export default function registerComponents(app) {
  app.component("DemoBlock", DemoBlock);
  app.component("Demo", Demo);
}
