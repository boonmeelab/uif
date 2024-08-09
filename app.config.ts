import uiConfig from "./config/ui"

const config = uiConfig()

export default defineAppConfig({
  ui: {
    primary: "uiPrimary",
    ...config,
  }
});
