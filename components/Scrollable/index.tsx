import { classNames } from "helpers/utils";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export interface IScrollableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Scrollable: React.FC<IScrollableProps> = ({ children, ...rest }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  console.log({ rest });

  return (
    <div
      {...rest}
      ref={ref}
      {...events}
      className={classNames(
        "relative overflow-hidden overflow-x-scroll no-scrollbar",
        rest.className
      )}
    >
      <div className="absolute w-full top-0 left-0">{children}</div>
    </div>
  );
};

export default Scrollable;
