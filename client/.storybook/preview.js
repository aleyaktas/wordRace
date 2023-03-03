import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../src/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
