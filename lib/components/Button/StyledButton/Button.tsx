import { forwardRef, ElementType } from "react";
import { styled } from "@pigment-css/react";
import { BaseButton, BaseButtonProps } from "../BaseButton/BaseButton";
import { useTheme } from "@theme/context/theme";
import { ButtonVariant } from "../types";
const DEFAULT_BUTTON_TAG = "button";
interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
}

const StyledButton = styled(BaseButton)({
  backgroundColor: "red",
  borderRadius: "0.3rem",
  color: "white",
});

const Button = forwardRef(
  <TagName extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps & React.ComponentPropsWithoutRef<TagName>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();
    console.log("Colors", theme);

    return (
      <StyledButton
        style={{ backgroundColor: theme.colors.green[50] }}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "StyledButton";

export { Button };
export type { ButtonProps };
