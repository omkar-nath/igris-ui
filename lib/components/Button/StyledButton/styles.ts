import { css, LinariaClassName } from "@linaria/core";
import { defaultTheme } from "@theme/context";
import { ButtonVariant, ButtonSize, ButtonAppearance } from "../types";
import { text } from "@theme/typography";

export const variantStyles = (): Record<
  ButtonVariant,
  Record<ButtonAppearance, LinariaClassName | string>
> => {
  const theme = defaultTheme;
  return {
    primary: {
      solid: css`
        background-color: ${theme.colors.shades.blue[500]};
        color: ${theme.colors.shades.gray[50]};
        &:hover {
          background-color: ${theme.colors.shades.blue[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.blue[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.blue[500]};
        color: ${defaultTheme.colors.shades.blue[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.blue[600]};
          color: ${defaultTheme.colors.shades.blue[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.blue[200]};
          color: ${defaultTheme.colors.shades.blue[200]};
        }
      `,
    },
    default: {
      solid: css`
        background-color: ${theme.colors.shades.gray[500]};
        color: ${theme.colors.shades.gray[50]};
        &:hover {
          background-color: ${theme.colors.shades.gray[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.gray[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.gray[500]};
        color: ${defaultTheme.colors.shades.gray[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.gray[400]};
          color: ${defaultTheme.colors.shades.gray[400]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.gray[200]};
          color: ${defaultTheme.colors.shades.gray[200]};
        }
      `,
    },
    secondary: {
      solid: css`
        background-color: ${theme.colors.shades.purple[500]};
        color: ${theme.colors.shades.gray[50]};
        &:hover {
          background-color: ${theme.colors.shades.purple[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.purple[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.purple[500]};
        color: ${defaultTheme.colors.shades.purple[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.purple[600]};
          color: ${defaultTheme.colors.shades.purple[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.purple[200]};
          color: ${defaultTheme.colors.shades.purple[200]};
        }
      `,
    },
    success: {
      solid: css`
        background-color: ${theme.colors.shades.green[500]};
        color: ${theme.colors.shades.gray[800]};
        &:hover {
          background-color: ${theme.colors.shades.green[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.green[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.green[500]};
        color: ${defaultTheme.colors.shades.green[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.green[600]};
          color: ${defaultTheme.colors.shades.green[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.green[200]};
          color: ${defaultTheme.colors.shades.green[200]};
        }
      `,
    },
    danger: {
      solid: css`
        background-color: ${theme.colors.shades.red[500]};
        color: ${theme.colors.shades.gray[50]};
        &:hover {
          background-color: ${theme.colors.shades.red[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.red[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.red[500]};
        color: ${defaultTheme.colors.shades.red[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.red[600]};
          color: ${defaultTheme.colors.shades.red[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.red[200]};
          color: ${defaultTheme.colors.shades.red[200]};
        }
      `,
    },

    info: {
      solid: css`
        background-color: ${theme.colors.shades.teal[500]};

        color: ${theme.colors.shades.gray[50]};
        &:hover {
          background-color: ${theme.colors.shades.teal[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.teal[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.teal[500]};
        color: ${defaultTheme.colors.shades.teal[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.teal[600]};
          color: ${defaultTheme.colors.shades.teal[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.teal[200]};
          color: ${defaultTheme.colors.shades.teal[200]};
        }
      `,
    },
    warning: {
      solid: css`
        background-color: ${theme.colors.shades.yellow[500]};
        color: ${theme.colors.shades.gray[800]};
        &:hover {
          background-color: ${theme.colors.shades.yellow[400]};
        }
        &:disabled {
          background-color: ${theme.colors.shades.yellow[300]};
        }
      `,
      outline: css`
        background-color: transparent;
        border: 2px solid ${defaultTheme.colors.shades.yellow[500]};
        color: ${defaultTheme.colors.shades.yellow[500]};
        &:hover {
          border-color: ${defaultTheme.colors.shades.yellow[600]};
          color: ${defaultTheme.colors.shades.yellow[600]};
        }
        &:disabled {
          border-color: ${defaultTheme.colors.shades.yellow[200]};
          color: ${defaultTheme.colors.shades.yellow[200]};
        }
      `,
    },
    ghost: {
      solid: css`
        background-color: ${theme.colors.shades.gray[100]};
        color: ${theme.colors.shades.gray[800]};
        &:hover {
          background-color: ${theme.colors.shades.gray[50]};
        }
      `,
      outline: css`
        &:hover {
          background-color: ${theme.colors.shades.gray[50]};
        }
      `,
    },
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
