import clsx from "clsx";
import React from "react";

export default function ProgressBar({ progress = "20", className, children }) {
  const progressContainerStyle = `h-12 border rounded-lg relative`;
  const classes = clsx(progressContainerStyle, className);

  // console.log("pr", progressWidth);
  return (
    <div className="relative bg-grey-100 rounded-lg">
      <div
        className="rounded-l-lg h-full  absolute z-10 top-0 bg-primary duration-300 ease-in-out translate-width"
        style={{ width: progress }}
      ></div>
      <div className={classes}>
        <div className="flex justify-center items-center h-full  relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
}
