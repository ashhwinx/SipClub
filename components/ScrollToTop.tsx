import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi route (pathname) change hoga, window top p chali jayegi
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'smooth' mat rakhna, page load p instant hona chahiye
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;