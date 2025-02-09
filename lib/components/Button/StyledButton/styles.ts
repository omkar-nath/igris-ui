import { css, LinariaClassName } from "@linaria/core";
import { defaultTheme } from "@theme/context";
import { ButtonVariant, ButtonSize } from "../types";
import { text } from "@theme/typography";

export const variantStyles = (): Record<ButtonVariant, LinariaClassName> => {
  const theme = defaultTheme;
  return {
    primary: css`
      background-color: ${theme.colors.shades.blue[500]};
      color: ${theme.colors.shades.gray[50]};
      &:hover {
        background-color: ${theme.colors.shades.blue[600]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.blue[300]};
      }
    `,
    default: css`
      background-color: ${theme.colors.shades.gray[400]};
      color: ${theme.colors.shades.gray[50]};
      &:hover {
        background-color: ${theme.colors.shades.gray[400]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.gray[200]};
      }
    `,
    success: css`
      background-color: ${theme.colors.shades.green[400]};
      color: ${theme.colors.shades.gray[800]};
      &:hover {
        background-color: ${theme.colors.shades.green[500]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.green[300]};
      }
    `,
    danger: css`
      background-color: ${theme.colors.shades.red[500]};
      color: ${theme.colors.shades.gray[50]};
      &:hover {
        background-color: ${theme.colors.shades.red[600]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.red[600]};
      }
    `,
    outline: css`
      background-color: transparent;
      border: 1px solid ${theme.colors.shades.gray[500]};
    `,
    info: css`
      background-color: ${theme.colors.shades.teal[500]};

      color: ${theme.colors.shades.gray[50]};
      &:hover {
        background-color: ${theme.colors.shades.teal[400]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.teal[300]};
      }
    `,
    warning: css`
      background-color: ${theme.colors.shades.yellow[500]};
      color: ${theme.colors.shades.gray[800]};
      &:hover {
        background-color: ${theme.colors.shades.yellow[300]};
      }
      &:disabled {
        background-color: ${theme.colors.shades.yellow[300]};
      }
    `,
    ghost: css`
      background-color: ${theme.colors.shades.gray[50]};
      color: ${theme.colors.shades.gray[800]};
    `,
  };
};

export const sizeStyles = (): Record<ButtonSize, LinariaClassName> => {
  return {
    sm: css`
      min-height: 1rem;
      min-width: 3rem;
      padding: 0.5rem 1rem;

      font-size: ${text.sm};
    `,
    md: css`
      min-height: 1.5rem;
      min-width: 4rem;
      padding: 0.6rem 1.4rem;
      font-size: ${text.sm};
    `,

    lg: css`
      min-height: 1.7rem;
      min-width: 5rem;
      padding: 0.7rem 1.6rem;
      font-size: ${text.p};
    `,
  };
};
