import "../src/style.scss";

import { withThemeByClassName } from "@storybook/addon-themes";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
