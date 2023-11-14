"use client";
import ReduxProvider from "@/redux/ReduxProvider";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function LayoutSub() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", mouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", mouseMove);
      }
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    txt: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const txtEnter = () => setCursorVariant("txt");
  const textLeave = () => setCursorVariant("default");

  const refInimate = useRef(null);
  const isInView = useInView(refInimate, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);
  const [navbar, setNavbar] = useState(false);
  const [navbarAbout, setNavbarAbout] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 1800) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
      if (window.scrollY >= 5380) {
        setNavbar(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <ReduxProvider>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        onMouseEnter={textLeave}
      />
    </ReduxProvider>
  );
}

export default LayoutSub;
