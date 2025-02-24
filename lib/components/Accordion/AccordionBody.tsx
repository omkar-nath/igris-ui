import React, { forwardRef, HTMLAttributes, useContext } from "react";
import { css } from "@linaria/core";
import { AccordionItemContext } from "./AccordionItem";

interface AccordianBodyProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AccordianBody = forwardRef<HTMLDivElement, AccordianBodyProps>(
  (props: AccordianBodyProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, ...rest } = props;
    const { id, visible } = useContext(AccordionItemContext);

    return (
      <div {...rest} className={`${bodyClass}`} ref={ref}>
        {children}
      </div>
    );
  },
);

AccordianBody.displayName = "AccordianBody";

const bodyClass = css`
  overflow: hidden;
  transition:
    max-height 300ms ease-in-out,
    opacity 200ms ease-in-out;
  max-height: 0px;
  opacity: 0;
`;

export { AccordianBody };
export type { AccordianBodyProps };
