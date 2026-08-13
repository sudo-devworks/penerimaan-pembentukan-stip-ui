import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getParticipantRouteTitle } from "../../routes";

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
    behavior: "auto",
  });
}

export function ParticipantRouteEffects() {
  const location = useLocation();

  useEffect(() => {
    document.title = getParticipantRouteTitle(location.pathname);

    scrollToPageTop();

    const mainContent = document.getElementById(
      "participant-main-content",
    );

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