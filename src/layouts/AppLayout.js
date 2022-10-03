import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { ReactComponent as DashboardIcon } from "../assets/icons/Dashboard.svg";
import { ReactComponent as NoteBookIcon } from "../assets/icons/notebook.svg";
import { ReactComponent as PaletteIcon } from "../assets/icons/palette.svg";
import { ReactComponent as NoteBook2Icon } from "../assets/icons/notebook2.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as BasketIcon } from "../assets/icons/basket.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/wrench.svg";
import LogoIcon from "../assets/logo.png";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", Icon: DashboardIcon, to: "/" },
  { name: "Case History", Icon: NoteBookIcon, to: "/history" },
  { name: "Final Reports", Icon: PaletteIcon, to: "/reports" },
  { name: "Cases In Progress", Icon: NoteBook2Icon, to: "/cases" },
  { name: "Account", break: true },
  { name: "Profile", Icon: AccountIcon, to: "/profile" },
  { name: "Subscription", Icon: BasketIcon, to: "/subscription" },
  { name: "Settings", Icon: SettingsIcon, to: "/settings" },
  { name: "Other Pages", break: true },
  { name: "404 Page", to: "/404" },
  { name: "Page Underconstruction", to: "/underconstruction" },
];

export default function AppLayout({ children }) {
  var animation = useRef();
  const [animState, setAnimState] = useState(0);
  const [didInit, setDidInit] = useState(false);

  const openMenu = () => {
    var element;
    var main_content;
    animation.current.setSpeed(2);
    if (animation.current)
      if (!animState) {
        animation.current.playSegments([0, 40], true);
        setAnimState(1);
        element = document.getElementById("side-nav");
        main_content = document.getElementById("main-content");
        element.classList.toggle("hidden");
        element.classList.remove("animate__fadeOutLeft");
        element.classList.add("animate__fadeInLeft");
        main_content.classList.remove("animate__fadeInRight");
        main_content.classList.add("animate__fadeInLeft");
      } else {
        animation.current.playSegments([40, 0], true);
        setAnimState(0);
        element = document.getElementById("side-nav");
        main_content = document.getElementById("main-content");

        element.classList.remove("animate__fadeInLeft");

        element.classList.add("animate__fadeOutLeft");
        element.classList.toggle("hidden");
        /* setTimeout(() => {
          element.classList.toggle("hidden");
        }, 100); */

        main_content.classList.remove("animate__fadeInLeft");

        main_content.classList.add("animate__fadeInRight");
      }
  };

  const initHamburger = () => {
    var hamburger = {
      container: document.getElementById("hamburger"),
      animationData: require("../assets/icons/hamburger.json"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      name: "hamburder Animation",
    };
    animation.current = lottie.loadAnimation(hamburger);
  };

  useEffect(() => {
    if (!didInit) {
      setDidInit(true);
      initHamburger();
    }
  }, [didInit]);

  return (
    <>
      <div className="overflow-hidden relative h-screen">
        <div className="border-b-2 py-2 sticky top-0 bg-white z-10">
          <div className="flex justify-between lg:px-10 px-5  items-center">
            <div className="flex items-center">
              <div onClick={() => openMenu()} className="block lg:hidden">
                <div className="h-[40px]" id="hamburger"></div>
              </div>
              <div className="">
                <Link to="/login">
                  <img src={LogoIcon} className="h-5 md:h-6" alt="logo" />
                </Link>
              </div>
            </div>
            <div>
              <div className="flex font-bold items-center justify-center h-[40px] w-[40px] bg-secondary text-md rounded-full">
                <span>SN</span>
                {/* check oout https://avatars.dicebear.com/ to create awesome avatars */}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`h-screen  ${
            animState
              ? "w-full overscroll-x-hidden"
              : "w-full overflow-y-hidden"
          }`}
        >
          <div className="relative min-h-screen">
            <div className="flex md:ml-10 mx-0  ">
              <div
                id="side-nav"
                className="w-screen lg:w-1/6 h-screen border-r-2 hidden lg:block side-nav animate__animated"
              >
                <nav className=" fixed">
                  <div className="overflow-y-scroll h-screen pt-2 pl-5 lg:pl-0 lg:pt-10 lg:pb-20">
                    <ul className="flex flex-col space-y-6">
                      {routes.map((route) => {
                        if (route?.break)
                          return <li className="pt-5 text-sm">{route.name}</li>;
                        return (
                          <li>
                            <NavItem
                              path={route.to}
                              Icon={route.Icon}
                              name={route.name}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
              <div
                id="main-content"
                className="animate__animated animate__faster w-auto lg:w-4/5 overflow-y-scroll h-screen"
              >
                <div
                  className={`w-screen h-full lg:w-full  ${
                    animState ? "w-[100px] opacity-0" : "w-full"
                  }`}
                >
                  <div className="h-full pt-12 pb-20 pl-2 pr-2 lg:pl-12 animate__animated animate__fadeIn">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
