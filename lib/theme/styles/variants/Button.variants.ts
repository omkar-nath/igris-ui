import { ButtonVariant } from "@components/Button/types";
import { defaultColors } from "../../colors/defaultColors";

export const buttonVariants: Record<ButtonVariant, Record<string, any>> = {
  default: {
    background: defaultColors.gray[10],
    color: defaultColors.gray[140],
  },
  primary: {
    background: defaultColors.blue[50],
    color: defaultColors.gray[0],
  },
  secondary: {
    background: defaultColors.gray[50],
    color: defaultColors.gray[140],
  },
  success: {
    background: defaultColors.green[50],
    color: defaultColors.gray[0],
  },
  warning: {
    background: defaultColors.yellow[50],
    color: defaultColors.gray[0],
  },
  danger: {
    background: defaultColors.red[50],
    color: defaultColors.gray[0],
  },
  info: {
    background: defaultColors.cyan[50],
    color: defaultColors.gray[0],
  },
  outline: {
    background: "transparent",
    color: defaultColors.gray[120],
  },
  ghost: {
    background: "transparent",
    color: defaultColors.gray[120],
  },
};
