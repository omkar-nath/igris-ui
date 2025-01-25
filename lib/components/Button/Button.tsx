import styles from "./styles.module.css";
import { styled } from "@pigment-css/react";

const BaseButton = styled("button")({
  backgroundColor: "pink",
});

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <BaseButton className={`${className} ${styles.button}`} {...restProps} />
  );
}
