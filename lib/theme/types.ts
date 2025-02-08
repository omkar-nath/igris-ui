import { ColorPalette } from "./colors/defaultColors";
import { DesignColors } from "./colors/designColors";
import { Typography } from "./typography";

export type Theme = {
  colors: {
    designColors: DesignColors;
    colors: ColorPalette;
  };
  typography: Typography;
};
