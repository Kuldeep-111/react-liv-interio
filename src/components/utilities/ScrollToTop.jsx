import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Step 1: Scroll to top immediately
    window.scrollTo({ top: 0, left: 0 });

    // Step 2: Remove AOS animation classes to reset their state
    const animatedEls = document.querySelectorAll('[data-aos]');
    animatedEls.forEach(el => {
      el.classList.remove('aos-animate');
    });

    // Step 3: Wait a little bit for DOM to render, then refresh AOS
    const timeout = setTimeout(() => {
      AOS.refresh(); // or refreshHard() if needed
    }, 300); // You can tweak the delay

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
