import React from "react";
import clsx from "clsx";

export default function Input({ value, className, invalid, ...rest }) {
  const inputStyle =
    "h-[55px] bg-white border border-[#DDE0E5] box-border w-full rounded pl-5";
  const placeholderStyle = "placeholder:text-grey-20  placeholder:text-base";
  const classes = clsx(
    invalid && "is-invalid",
    inputStyle,
    className,
    placeholderStyle
  );
  return (
    <div>
      <input value={value} {...rest} className={classes} />
    </div>
  );
}
