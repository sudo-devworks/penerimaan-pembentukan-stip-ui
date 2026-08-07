import { forwardRef, type Ref } from "react";
import { ArrowLeft } from "lucide-react";

import { joinNavigationClassNames } from "../shared";
import type {
  BackNavigationButtonProps,
  BackNavigationLinkProps,
  BackNavigationProps,
} from "./BackNavigation.types";

import "./BackNavigation.css";

export const BackNavigation = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  BackNavigationProps
>(({ children, icon = <ArrowLeft />, className, ...interactionProps }, ref) => {
  const content = (
    <>
      <span aria-hidden="true" className="stip-back-navigation__icon">
        {icon}
      </span>

      <span className="stip-back-navigation__label">{children}</span>
    </>
  );

  if (typeof interactionProps.href === "string") {
    const { href, ...anchorProps } =
      interactionProps as BackNavigationLinkProps;

    return (
      <a
        {...anchorProps}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        className={joinNavigationClassNames("stip-back-navigation", className)}
      >
        {content}
      </a>
    );
  }

  const {
    type = "button",
    disabled = false,
    ...buttonProps
  } = interactionProps as BackNavigationButtonProps;

  return (
    <button
      {...buttonProps}
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={joinNavigationClassNames("stip-back-navigation", className)}
    >
      {content}
    </button>
  );
});

BackNavigation.displayName = "BackNavigation";
