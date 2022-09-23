import React from "react";
import clsx from "clsx";

const buttonSizes = {
  sm: "py-2 px-3",
  md: "px-4",
  lg: "px-5",
  block: "w-full",
};

export default function Button({
  type = "primary",
  size = "block",
  className,
  ...rest
}) {
  const sizeProp = size in buttonSizes ? size : "sm";

  const classes = clsx(buttonSizes[sizeProp], className);
  switch (type) {
    case "secondary":
      return <SecondaryButton className={classes} {...rest} />;
    default:
      return <PrimaryButton className={classes} {...rest} />;
  }
}

const PrimaryButton = ({ className, children, ...rest }) => {
  const primaryStyle = `text-white rounded-md h-12 base-button bg-primary`;
  const classes = clsx(primaryStyle, className);
  return (
    <div>
      <button className={classes} {...rest}>
        {children}
      </button>
    </div>
  );
};

const SecondaryButton = ({ className, children, ...rest }) => {
  const primaryStyle = `text-white rounded-md h-9 base-button bg-secondary`;
  const classes = clsx(primaryStyle, className);
  return (
    <div>
      <button className={classes} {...rest}>
        {children}
      </button>
    </div>
  );
};
