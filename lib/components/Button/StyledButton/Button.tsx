import { forwardRef, ElementType } from "react";
import { cx } from "@linaria/core";

import { styled } from "@linaria/react";
import { BaseButton, BaseButtonProps } from "../BaseButton/BaseButton";
import { buttonSizes } from "@theme/styles/Button/variants";
import { ButtonSize, ButtonVariant } from "../types";
import { useTheme, Theme } from "@theme/context";

const DEFAULT_BUTTON_TAG = "button";

const StyledButton = styled(BaseButton) <{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.shades.gray[400]};
  color: ${({ theme }) => theme.colors.shades.gray[50]};
`;
interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef(
  <TagName extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps & React.ComponentPropsWithoutRef<TagName>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();

    return (
      <StyledButton
        theme={theme}
        ref={ref}
        className={cx(buttonSizes["md"])}
        {...props}
      ></StyledButton>
    );
  },
);

Button.displayName = "StyledButton";

export { Button };
export type { ButtonProps };
