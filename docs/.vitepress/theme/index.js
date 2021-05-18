import theme from "vitepress/dist/client/theme-default";
import installDocComponents from "../components/index";
import { install } from "../../../components";
import "./index.scss";

theme.enhanceApp = ({ app }) => {
  install(app);
  installDocComponents(app);
};

export default theme;
