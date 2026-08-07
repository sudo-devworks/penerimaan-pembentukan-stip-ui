import { forwardRef, useId } from "react";

import { joinNavigationClassNames } from "../shared";
import type { SideNavigationGroupProps } from "./SideNavigation.types";

export const SideNavigationGroup = forwardRef<
  HTMLDivElement,
  SideNavigationGroupProps
>(({ children, label, className, ...groupProps }, ref) => {
  const generatedLabelId = useId();

  return (
    <div
      {...groupProps}
      ref={ref}
      role="group"
      aria-labelledby={generatedLabelId}
      className={joinNavigationClassNames(
        "stip-side-navigation__group",
        className,
      )}
    >
      <div id={generatedLabelId} className="stip-side-navigation__group-label">
        {label}
      </div>

      <div className="stip-side-navigation__items">{children}</div>
    </div>
  );
});

SideNavigationGroup.displayName = "SideNavigationGroup";
