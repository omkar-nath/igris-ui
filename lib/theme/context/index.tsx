"use client";
import { createContext, useContext } from "react";
import { ColorPalette, defaultColors } from "@theme/colors/defaultColors";
import { defaultDesignColors, DesignColors } from "@theme/colors/designColors";
import { spacing, Spacing } from "@theme/spacing";
import { text, Typography } from "@theme/typography";

export type Theme = {
  colors: {
    designColors: DesignColors;
    shades: ColorPalette;
  };
  typography: Typography;
  spacing: Spacing;
};
export const defaultTheme: Theme = {
  colors: {
    designColors: defaultDesignColors,
    shades: defaultColors,
  },
  typography: text,
  spacing: spacing,
};

const ThemeContext: React.Context<Theme> = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>
  );
};
export const useTheme = (): Theme => useContext(ThemeContext) || defaultTheme;
