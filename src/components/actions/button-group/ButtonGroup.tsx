import { forwardRef } from "react";

import type { ButtonGroupProps } from "./ButtonGroup.types";

import "./ButtonGroup.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      direction = "horizontal",
      align = "end",
      stackOnMobile = false,
      stretchOnMobile = false,
      className,
      role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...groupProps
    },
    ref,
  ) => {
    const hasAccessibleGroupName = Boolean(ariaLabel || ariaLabelledBy);

    return (
      <div
        {...groupProps}
        ref={ref}
        role={role ?? (hasAccessibleGroupName ? "group" : undefined)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        data-direction={direction}
        data-align={align}
        data-stack-mobile={stackOnMobile || undefined}
        data-stretch-mobile={stretchOnMobile || undefined}
        className={joinClassNames("stip-button-group", className)}
      >
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
