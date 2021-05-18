import { App } from "vue";
import Barrage from "./Barrage/index.vue";
import Skeleton from "./Skeleton/index.vue";

const componentsMap = {
  Skeleton,
  Barrage,
};

const components: any[] = Object.keys(componentsMap).map((key) => {
  const component: any = componentsMap[key as keyof typeof componentsMap];
  component.name = component.name || key;
  return component;
});

export const install = (app: App<Element>) => {
  components.forEach((Component) => {
    if (typeof Component === "function" && typeof Component.name === "string") {
      app.component(`${Component.name}`, Component);
    } else if (Component && typeof Component.name === "string") {
      app.component(Component.name, Component);
    } else if (Component && typeof Component.install === "function") {
      app.use(Component);
    } else {
      console.warn("Failed to register component:", Component);
    }
  });
};

