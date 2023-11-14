import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useRouter();
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.scroll({ top: 0, behavior: "auto" });
    }
  }, [pathname]);
  return null;
};
export default ScrollToTop;
