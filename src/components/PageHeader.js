import React from "react";

export default function PageHeader({ title, children, showLine = true }) {
  return (
    <div>
      <div className="text-primary text-lg font-normal">{title}</div>
      <div className="pt-6">{children}</div>
      {showLine && (
        <div className="py-10">
          <hr className="border border-grey-100" />
        </div>
      )}
    </div>
  );
}
