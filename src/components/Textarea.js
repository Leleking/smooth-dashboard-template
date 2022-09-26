import React from "react";
import clsx from "clsx";

export default function Textarea({
  value,
  className,
  children,
  invalid,
  ...rest
}) {
  const inputStyle =
    "bg-white border border-[#DDE0E5] box-border w-full rounded p-2";
  const placeholderStyle = "placeholder:text-grey-20  placeholder:text-base";
  const classes = clsx(
    invalid && "is-invalid",
    inputStyle,
    className,
    placeholderStyle
  );
  return (
    <div>
      <textarea value={value} {...rest} className={classes}>
        {children}
      </textarea>
    </div>
  );
}
