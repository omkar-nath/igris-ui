import { forwardRef, ElementType } from "react";
import { styled } from "@pigment-css/react";
import { BaseButton, BaseButtonProps } from "../BaseButton/BaseButton";
import { ButtonVariant } from "../types";

const DEFAULT_BUTTON_TAG = "button";
interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
}

const StyledButton = styled(BaseButton)({
  backgroundColor: "red",
  color: "black",
});

const Button = forwardRef(
  <TagName extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps & React.ComponentPropsWithoutRef<TagName>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return <StyledButton ref={ref} {...props} />;
  },
);

Button.displayName = "StyledButton";

export { Button };
export type { ButtonProps };
