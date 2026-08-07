import { forwardRef, useId } from "react";

import "./FormSection.css";

import { joinClassNames } from "../shared";
import type { FormSectionProps } from "./FormSection.types";

export const FormSection = forwardRef<HTMLElement, FormSectionProps>(
  function FormSection(
    {
      actions,
      children,
      className,
      description,
      divided = false,
      title,
      ...props
    },
    ref,
  ) {
    const generatedTitleId = useId();

    const labelledBy =
      title && !props["aria-label"]
        ? generatedTitleId
        : props["aria-labelledby"];

    return (
      <section
        {...props}
        ref={ref}
        aria-labelledby={labelledBy}
        className={joinClassNames(
          "form-section",
          divided && "form-section--divided",
          className,
        )}
      >
        {title || description || actions ? (
          <div className="form-section__header">
            <div className="form-section__heading">
              {title ? (
                <h2 className="form-section__title" id={generatedTitleId}>
                  {title}
                </h2>
              ) : null}

              {description ? (
                <p className="form-section__description">{description}</p>
              ) : null}
            </div>

            {actions ? (
              <div className="form-section__header-actions">{actions}</div>
            ) : null}
          </div>
        ) : null}

        <div className="form-section__content">{children}</div>
      </section>
    );
  },
);

FormSection.displayName = "FormSection";
