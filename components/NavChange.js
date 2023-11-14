import { useState } from "react";

const NavChange = (navbar, setNavbar) => {
  [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 400) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
};
export default NavChange;
