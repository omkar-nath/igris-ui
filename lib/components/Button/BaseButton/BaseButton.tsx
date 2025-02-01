import React, { useRef, forwardRef, ElementType, ReactNode } from "react";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useButton } from "@react-aria/button";
import { css } from "@pigment-css/react";
import { clsx } from "clsx";

const DEFAULT_BUTTON_TAG = "button";

const baseButtonStyles = css({
  padding: "0.5rem",
  color: "inherit",
});

interface BaseButtonProps<
  TagName extends ElementType = typeof DEFAULT_BUTTON_TAG,
> {
  as?: TagName;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: ReactNode | ((props: BaseButtonRenderProps) => ReactNode);
  styles?: React.CSSProperties;
}

// These props will be used if the consumer is using render props pattern for renderin children
export interface BaseButtonRenderProps {
  disabled: boolean;
  autoFocus: boolean;
  hover: boolean;
  focus: boolean;
  isPressed: boolean;
}

const BaseButton = forwardRef(
  <TagName extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: BaseButtonProps<TagName> & React.ComponentPropsWithoutRef<TagName>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const {
      as: Component = "button",
      disabled = false,
      autoFocus = false,
      type = "button",
      className,
      onClick,
      children,
      ...rest
    } = props;
    const internalRef = useRef<HTMLButtonElement>(null);
    const buttonRef =
      (ref as React.RefObject<HTMLButtonElement>) || internalRef;
    const { isFocusVisible: focus, focusProps } = useFocusRing({ autoFocus });
    const { isHovered: hover, hoverProps } = useHover({ isDisabled: disabled });
    const { buttonProps: accessbilityButtonProps, isPressed } = useButton(
      {
        isDisabled: disabled,
        onPress: onClick,
        elementType: Component,
      },
      buttonRef,
    );

    const allButtonAttributes = {
      ...accessbilityButtonProps,

      ...focusProps,
      ...hoverProps,
      type,
      disabled,
      ref: buttonRef,
      ...rest,
    };

    const renderProps = {
      disabled,
      autoFocus,
      hover,
      focus,
      isPressed,
    };

    return (
      <Component
        {...allButtonAttributes}
        className={clsx(baseButtonStyles, className)}
      >
        {typeof children === "function" ? children(renderProps) : children}
      </Component>
    );
  },
);

BaseButton.displayName = "BaseButton";

export { BaseButton };

export type { BaseButtonProps };
