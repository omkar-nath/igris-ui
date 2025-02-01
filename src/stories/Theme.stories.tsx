import { styled } from "@pigment-css/react";
import { defaultColors } from "../../lib/theme/colors/defaultColors";

import ColorSwatch from "../ColorSwatch"; // Import the ColorSwatch component

const Flex = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

export default {
  title: "Design System/Colors",
  component: ColorSwatch,
};

const Template = () => {
  return (
    <div>
      <h2>Colors</h2>
      {Object.keys(defaultColors).map((colorName) => {
        const color = defaultColors[colorName];

        return (
          <div key={colorName}>
            <h3>{colorName}</h3>
            <Flex>
              {Object.keys(color).map((colorCode, index) => (
                <ColorSwatch
                  name={`${colorCode}`}
                  value={color[colorCode]}
                  key={`${colorName}-${colorCode}-${index}`}
                />
              ))}
            </Flex>
          </div>
        );
      })}
    </div>
  );
};

export const Default = Template.bind({});
