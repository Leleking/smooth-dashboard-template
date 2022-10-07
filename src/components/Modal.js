import { useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export default function Modal({ isOpen, onDismiss, children, ...rest }) {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setDeviceSize(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (deviceSize <= 480) {
    return (
      <BottomSheet open={isOpen} onDismiss={() => onDismiss()} {...rest}>
        {children}
      </BottomSheet>
    );
  }
  return <div></div>;
}
