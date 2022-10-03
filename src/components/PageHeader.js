import React from "react";

export default function PageHeader({ title, children, showLine = true }) {
  return (
    <div>
      <div className="text-primary text-lg font-normal">{title}</div>
      {children && <div className="pt-6">{children}</div>}
      {showLine && (
        <div className="pt-5">
          <hr className="border border-grey-100" />
        </div>
      )}
    </div>
  );
}
