import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth"
      };

      if ("scrollBehavior" in document.documentElement.style) {
        // Use native smooth scrolling if supported by the browser
        window.scrollTo(scrollOptions);
      } else {
        // Use polyfill for smooth scrolling animation
        smoothScrollTo(scrollOptions);
      }
    };

    scrollToTop();
  }, [pathname]);

  const smoothScrollTo = (scrollOptions) => {
    const scrollDuration = 500; // Duration of the smooth scrolling animation
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    let scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return null;
};

export default ScrollToTop;
