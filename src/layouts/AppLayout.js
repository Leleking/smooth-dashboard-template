import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { ReactComponent as DashboardIcon } from "../assets/icons/Dashboard.svg";
import { ReactComponent as NoteBookIcon } from "../assets/icons/notebook.svg";
import { ReactComponent as PaletteIcon } from "../assets/icons/palette.svg";
import { ReactComponent as NoteBook2Icon } from "../assets/icons/notebook2.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as BasketIcon } from "../assets/icons/basket.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/wrench.svg";
import NavItem from "../components/NavItem";

const routes = [
  { name: "Dashboard", Icon: DashboardIcon, to: "/" },
  { name: "CASES", break: true },
  { name: "Case History", Icon: NoteBookIcon, to: "/history" },
  { name: "Final Reports", Icon: PaletteIcon, to: "/reports" },
  { name: "Cases In Progress", Icon: NoteBook2Icon, to: "/cases" },
  { name: "ACCOUNT", break: true },
  { name: "Profile", Icon: AccountIcon, to: "/profile" },
  { name: "Subscription", Icon: BasketIcon, to: "/subscription" },
  { name: "Settings", Icon: SettingsIcon, to: "/settings" },
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
      <div className="overflow-x-hidden relative h-screen">
        <div className="border-b-2 py-5 sticky top-0 bg-white z-10">
          <div className="flex justify-between md:mx-20 mx-5  items-center">
            <div className="flex items-center">
              <div onClick={() => openMenu()} className="block md:hidden">
                <div className="h-[40px]" id="hamburger"></div>
              </div>
              <div>Smooth Dashboard</div>
            </div>
            <div>Simeon Nortey</div>
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
            <div className="flex md:mx-20 mx-0  ">
              <div
                id="side-nav"
                className="w-screen md:w-1/5 h-screen border-r-2 hidden md:block side-nav animate__animated"
              >
                <nav className=" fixed">
                  <div className="overflow-y-scroll h-screen pt-5 pl-5 md:pl-0 md:pt-10 md:pb-20">
                    <ul className="flex flex-col space-y-6">
                      {routes.map((route) => {
                        if (route?.break)
                          return <li className="pt-5">{route.name}</li>;
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
                className="animate__animated animate__faster w-auto md:w-4/5"
              >
                <div
                  className={`w-screen lg:w-full  ${
                    animState ? "w-[100px] opacity-0" : "w-full"
                  }`}
                >
                  <div className="overflow-y-scroll h-screen pt-12 pb-20 pl-2 pr-2 md:pl-12 animate__animated animate__fadeIn">
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
