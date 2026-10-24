import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let cancelled = false;
      let timer: number | undefined;

      // The target element may not exist yet on first render (page still
      // mounting, images loading). Keep looking for it briefly instead of
      // giving up and jumping to the top.
      const attempt = (remaining: number) => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (remaining > 0) {
          timer = window.setTimeout(() => attempt(remaining - 1), 100);
        }
      };

      // First attempt after the page has painted.
      const raf = requestAnimationFrame(() => attempt(20)); // ~2s window
      return () => {
        cancelled = true;
        cancelAnimationFrame(raf);
        if (timer !== undefined) window.clearTimeout(timer);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
