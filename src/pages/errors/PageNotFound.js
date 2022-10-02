import React, { useState, useRef, useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import lottie from "lottie-web";
import { Button } from "../../components";

export default function PageNotFound() {
  const animation = useRef();
  const [didInit, setDidInit] = useState(false);
  /* https://lottiefiles.com/animoox - Lottie animation by Abdul Latif  */
  const initAnim = () => {
    var hamburger = {
      container: document.getElementById("404"),
      animationData: require("../../assets/icons/404.json"),
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
        <div className="h-72" id="404"></div>
        <div>Opps.. The page you are looking for can't be found</div>
        <div className="pt-2">
          <Button className="px-5">Go Back</Button>
        </div>
      </div>
    </AppLayout>
  );
}
