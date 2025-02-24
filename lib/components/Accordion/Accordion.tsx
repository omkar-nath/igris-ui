import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useState,
} from "react";

interface AccordianProps extends HTMLAttributes<HTMLDivElement> {
  activeItemKey?: number | string;
  alwaysOpen?: boolean;
  className?: string;
}

export interface AccordianContextProps {
  _activeItemKey?: number | string;
  alwaysOpen?: boolean;
  setActiveKey: React.Dispatch<
    React.SetStateAction<number | string | undefined>
  >;
}

export const AccordionContext = createContext({} as AccordianContextProps);

const Accordian = forwardRef<HTMLDivElement, AccordianProps>(
  (props: AccordianProps, ref: React.Ref<HTMLDivElement>) => {
    const { activeItemKey, children, alwaysOpen } = props;
    const [_activeItemKey, setActiveKey] = useState(activeItemKey);

    return (
      <div ref={ref}>
        <AccordionContext.Provider
          value={{ _activeItemKey, alwaysOpen, setActiveKey }}
        >
          {children}
        </AccordionContext.Provider>
      </div>
    );
  },
);

Accordian.displayName = "Accordian";

export { Accordian };
export type { AccordianProps };
