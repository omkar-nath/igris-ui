import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    name: "Igris UI",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    title: {
      name: "Igris UI",
    },
  },
};

export default preview;
