import React, {
  forwardRef,
  HTMLAttributes,
  createContext,
  useEffect,
  useContext,
  useId,
  useRef,
  useState,
} from "react";
import { AccordionContext } from "./Accordion";

interface AccordionItemContextProps {
  id: string;
  setVisible: (a: boolean) => void;
  visible?: boolean;
}

const AccordionItemContext = createContext({} as AccordionItemContextProps);

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  itemKey?: number | string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (props: AccordionItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, id, itemKey } = props;

    const _id = id ?? useId();
    const _itemKey = useRef(itemKey ?? _id);
    const { _activeItemKey, setActiveKey, alwaysOpen } =
      useContext(AccordionContext);
    const [visible, setVisible] = useState(
      Boolean(_activeItemKey === _itemKey.current),
    );

    useEffect(() => {
      if (!alwaysOpen && visible) {
        setActiveKey(_itemKey.current);
      }
    }, [visible]);

    useEffect(() => {
      setVisible(Boolean(_activeItemKey === _itemKey.current));
    }, [_activeItemKey]);

    return (
      <div ref={ref}>
        <AccordionItemContext.Provider value={{ id: _id, setVisible, visible }}>
          {children}
        </AccordionItemContext.Provider>
      </div>
    );
  },
);

AccordionItem.displayName = "AccordianItem";

export { AccordionItem };
export type { AccordionItemProps };
