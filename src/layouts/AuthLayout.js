import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/logo.png";

export default function AuthLayout({ children }) {
  return (
    <div className="xl:px-96 lg:px-24 md:px-20 sm:px-10">
      <nav className="py-5">
        <ul className="flex justify-between items-center">
          <li className="text-lg">
            <Link to="/">
              <img src={LogoIcon} className="h-8" alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/faqs">
              <div className="bg-secondary h-[30px]  w-[30px] rounded-full flex justify-center items-center">
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.578 1.512C2.94 1.512 2.002 2.156 1.764 3.444H0C0.098 2.408 0.525 1.575 1.281 0.945C2.037 0.315 3.094 0 4.452 0C5.824 0 6.902 0.336 7.686 1.008C8.484 1.68 8.883 2.499 8.883 3.465C8.883 4.193 8.701 4.802 8.337 5.292C7.973 5.768 7.385 6.23 6.573 6.678C6.223 6.874 5.929 7.049 5.691 7.203C5.453 7.357 5.264 7.532 5.124 7.728C4.858 8.078 4.725 8.582 4.725 9.24V10.059H3.087V9.114C3.087 8.232 3.234 7.56 3.528 7.098C3.822 6.622 4.354 6.174 5.124 5.754C5.894 5.334 6.412 4.97 6.678 4.662C6.944 4.34 7.077 3.913 7.077 3.381C7.077 2.849 6.853 2.408 6.405 2.058C5.971 1.694 5.362 1.512 4.578 1.512ZM3.927 11.298C4.291 11.298 4.592 11.417 4.83 11.655C5.068 11.893 5.187 12.18 5.187 12.516C5.187 12.838 5.068 13.111 4.83 13.335C4.592 13.559 4.291 13.671 3.927 13.671C3.563 13.671 3.269 13.559 3.045 13.335C2.821 13.111 2.709 12.838 2.709 12.516C2.709 12.18 2.821 11.893 3.045 11.655C3.269 11.417 3.563 11.298 3.927 11.298Z"
                    fill="#005C69"
                  />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="pt-9">{children}</div>
    </div>
  );
}
