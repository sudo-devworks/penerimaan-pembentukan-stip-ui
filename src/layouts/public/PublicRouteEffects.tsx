import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getPublicRouteTitle } from "../../routes";

function prefersReducedMotion() {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
}

function scrollToPageTop() {
  if (
    typeof window === "undefined" ||
    typeof window.scrollTo !== "function"
  ) {
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion() ? "auto" : "auto",
  });
}

export function PublicRouteEffects() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPublicRouteTitle(location.pathname);

    scrollToPageTop();

    const mainContent = document.getElementById("main-content");

    if (!mainContent) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      mainContent.focus({
        preventScroll: true,
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [location.pathname]);

  return null;
}