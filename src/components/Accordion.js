import clsx from "clsx";
import React, { createContext, useContext, useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";

const AccordionContext = createContext();
const Accordion = ({ children }) => {
  const [expandedValue, setExpandedValue] = useState(null);
  const toggleCollapse = (value) =>
    setExpandedValue((prevId) => {
      if (prevId === value) return null;
      return value;
    });

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleCollapse }}>
      {children}
    </AccordionContext.Provider>
  );
};

const Item = ({ title, id, children }) => {
  const { expandedValue, toggleCollapse } = useContext(AccordionContext);
  const childrenStyle = clsx(
    expandedValue !== id
      ? "max-h-0 duration-200  ease-out"
      : `max-h-[500px] duration-300 ease-in`,
    "overflow-hidden transition-maxh text-sm text-grey-200"
  );
  const closeIconStyle = clsx(
    expandedValue === id && "rotate-45",
    "duration-700 ease-in-out"
  );

  return (
    <>
      <div
        onClick={() => toggleCollapse(id)}
        className="flex items-center justify-between cursor-pointer text-primary text-lg"
      >
        <div>{title}</div>
        <div>
          <div className="h-[30px] w-[30px] bg-grey-100 rounded-full">
            <div className="flex justify-center items-center w-full h-full">
              <PlusIcon className={closeIconStyle} />
            </div>
          </div>
        </div>
      </div>
      <div className={childrenStyle}>{children}</div>
      <div className="py-4">
        <hr />
      </div>
    </>
  );
};

Accordion.Item = Item;

export default Accordion;
