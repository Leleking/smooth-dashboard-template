import React, { useState, useRef, useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import lottie from "lottie-web";

export default function UnderConstruction() {
  const animation = useRef();
  const [didInit, setDidInit] = useState(false);
  /* https://lottiefiles.com/evaristphi  */
  const initAnim = () => {
    var hamburger = {
      container: document.getElementById("coding"),
      animationData: require("../../assets/icons/coding.json"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "coding Animation",
    };
    animation.current = lottie.loadAnimation(hamburger);
  };

  useEffect(() => {
    if (!didInit) {
      setDidInit(true);
      initAnim();
    }
  }, [didInit]);
  return (
    <AppLayout>
      <div className="flex flex-col space-y-2 w-full items-center justify-center pt-10">
        <div className="h-72" id="coding"></div>
        <div>Opps.. page is still under construction</div>
      </div>
    </AppLayout>
  );
}
