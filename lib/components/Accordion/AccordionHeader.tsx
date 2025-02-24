import React, { forwardRef, HTMLAttributes } from "react";

interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  (props: AccordionHeaderProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        <button>Hello</button>
      </div>
    );
  },
);

AccordionHeader.displayName = "AccordianHeader";

export { AccordionHeader };
