import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Subtle scroll-reveal: elements with .reveal fade+slide in when visible.
if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  const attach = () => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
  attach();
  new MutationObserver(attach).observe(document.body, { childList: true, subtree: true });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
