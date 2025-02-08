import { ButtonSize, ButtonVariant } from "@components/Button/types";
import { buttonSizes } from "./variants";
import { css } from "@linaria/core";
import { Theme, defaultTheme } from "@theme/context/";
import { DesignColors, DesignColorTokens } from "@theme/colors/designColors";
import { ColorPalette } from "@theme/colors/defaultColors";
import { ThemeMode } from "@theme/colors/designColors";

type ButtonStyleArgs = {
  size: ButtonSize;
  variant?: ButtonVariant;
  currentTheme: ThemeMode;
  theme?: Theme;
};
