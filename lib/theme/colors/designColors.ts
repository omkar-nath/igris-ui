export type DesignColorTokens =
  | "primary"
  | "default"
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "background"
  | "foreground"
  | "focus";

export type ThemeMode = "light" | "dark";

export type DesignColors = Record<ThemeMode, Record<DesignColorTokens, string>>;

export const defaultDesignColors: DesignColors = {
  light: {
    primary: "blue",
    default: "gray",
    success: "green",
    warning: "yellow",
    info: "cyan",
    danger: "red",
    background: "#F8F8FF",
    foreground: "gray",
    focus: "blue",
  },
  dark: {
    primary: "blue",
    default: "gray",
    success: "green",
    warning: "yellow",
    focus: "blue",
    info: "cyan",
    danger: "red",
    background: "#1B1212",
    foreground: "#F8F8FF ",
  },
};
