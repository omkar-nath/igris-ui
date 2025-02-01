"use client";
import { defaultColors } from "@theme/colors/defaultColors";
import { createContext, Provider, useContext } from "react";
const defaultTheme = {
    colors: defaultColors,
};

const ThemeContext = createContext<any>({
    theme: defaultTheme,
});

export const ThemeProvider: Provider<any> = ThemeContext.Provider;
export function useTheme() {
    return useContext(ThemeContext)?.theme || defaultTheme;
}
