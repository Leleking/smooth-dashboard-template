import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import useActiveRoute from "../hooks/useActiveRoute";
export default function NavItem({ Icon, path, name }) {
  const active = useActiveRoute(path);
  const activeStyle = clsx(active && "w-[60px]", !active && "w-0 ", "");
  const fillStyle = clsx(
    active && "stroke-primary",
    !active && "stroke-grey-300 ",
    "stroke-[0.2px]"
  );
  return (
    <Link to={path}>
      <div className="flex py-2">
        <span>
          <Icon className={fillStyle} />
        </span>
        <span className="pl-2">{name}</span>
      </div>

      <div className={activeStyle}>
        <hr className="w-full h-1 bg-primary nav-line " />
      </div>
    </Link>
  );
}
