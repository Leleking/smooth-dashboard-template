import React from "react";
import clsx from "clsx";
import "hamburgers/dist/hamburgers.css";
import "../assets/scss/hamburger.scss";

export default function Hamburger({ className, active, type }) {
  const hamburgerStyle = clsx(
    active && "is-active",
    "hamburger",
    type && `hamburger--${type}`,
    className
  );
  return (
    <button
      className={hamburgerStyle}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
