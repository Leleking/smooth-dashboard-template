import React from "react";
import clsx from "clsx";

export default function Select({ children, className, ...rest }) {
  const inputStyle = "h-full bg-white  box-border w-full rounded outline-0";
  const placeholderStyle = "placeholder:text-grey-20  placeholder:text-base";
  const classes = clsx(inputStyle, className, placeholderStyle);
  return (
    <div className="border border-[#DDE0E5] h-[55px] bg-white  box-border w-full rounded px-5">
      <select {...rest} className={classes}>
        {children}
      </select>
    </div>
  );
}
