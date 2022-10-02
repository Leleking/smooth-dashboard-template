import React from "react";
import clsx from "clsx";

export default function StatsItem({ title, value, type = "none" }) {
  const valueStyle = clsx(
    type === "primary" && "text-primary",
    type === "danger" && "text-red",
    type === "secondary" && "text-secondary",
    "text-2xl font-sans"
  );

  return (
    <div className="flex flex-col space-y-2">
      <div className={valueStyle}>{value}</div>
      <div className="text-grey-200 font-semibold">{title}</div>
    </div>
  );
}
