import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { SkipLinkProps } from "./SkipLink.types";

import "./SkipLink.css";

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ children, href = "#main-content", className, ...anchorProps }, ref) => {
    return (
      <a
        {...anchorProps}
        ref={ref}
        href={href}
        className={joinNavigationClassNames("stip-skip-link", className)}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = "SkipLink";
