import { css } from "@linaria/core";
import { ButtonSize, ButtonVariant } from "@components/Button/types";
import { text } from "@theme/typography";
import { defaultColors } from "../../colors/defaultColors";
import { DesignColorTokens } from "@theme/colors/designColors";
import { ColorPalette } from "../../colors/defaultColors";

export const buttonSizes: Record<ButtonSize, string> = {
  sm: css`
    min-height: 2rem;
    min-width: 4rem;
    padding: 0.5rem 1rem;

    font-size: ${text.sm};
  `,
  md: css`
    min-height: 2.5rem;
    min-width: 6rem;
    padding: 0.6rem 1.4rem;
    font-size: ${text.sm};
  `,

  lg: css`
    min-height: 3rem;
    min-width: 10rem;
    padding: 1rem 2rem;
    font-size: ${text.p};
  `,
};
