import uiConfig from "./config/ui";

const customConfig = {}
const config = uiConfig(customConfig);

export default defineAppConfig({
  ui: {
    primary: "uiPrimary",
    ...config,
  },
});
