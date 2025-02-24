import { forwardRef, ElementType } from "react";
import { BaseButton, BaseButtonProps } from "../BaseButton/BaseButton";
import { ButtonAppearance, ButtonSize, ButtonVariant } from "../types";
import { useTheme } from "@theme/context";
import { sizeStyles, variantStyles } from "./styles";

const DEFAULT_BUTTON_TAG = "button";

interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
}

const Button = forwardRef(
  <TagName extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps & React.ComponentPropsWithoutRef<TagName>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const {
      variant = "default",
      size = "sm",
      appearance = "solid",
      ...rest
    } = props;
    const theme = useTheme();
    const variantClass = variantStyles()[variant][appearance];
    const sizeClass = sizeStyles()[size];

    return (
      <BaseButton
        {...rest}
        theme={theme}
        size="md"
        ref={ref}
        className={`${variantClass}  ${sizeClass}`}
        {...props}
      ></BaseButton>
    );
  },
);

Button.displayName = "StyledButton";

export { Button };
export type { ButtonProps };
