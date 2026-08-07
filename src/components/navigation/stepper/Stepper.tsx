import { forwardRef } from "react";

import { joinNavigationClassNames } from "../shared";
import type { StepperProps } from "./Stepper.types";

import "./Stepper.css";

export const Stepper = forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      children,
      label = "Tahapan proses",
      orientation = "horizontal",
      className,
      ...listProps
    },
    ref,
  ) => {
    return (
      <ol
        {...listProps}
        ref={ref}
        aria-label={label}
        data-orientation={orientation}
        className={joinNavigationClassNames("stip-stepper", className)}
      >
        {children}
      </ol>
    );
  },
);

Stepper.displayName = "Stepper";
