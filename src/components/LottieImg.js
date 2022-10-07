import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";

export default function UnderConstruction({ src, name, className }) {
  const animation = useRef();
  const [didInit, setDidInit] = useState(false);

  useEffect(() => {
    (() => {
      if (!didInit) {
        setDidInit(true);
        var lottieConfig = {
          container: document.getElementById(name),
          animationData: src,
          renderer: "svg",
          loop: true,
          autoplay: true,
          name,
        };
        animation.current = lottie.loadAnimation(lottieConfig);
      }
    })();
  }, [didInit, name, src]);
  return <div className={className} id={name}></div>;
}
