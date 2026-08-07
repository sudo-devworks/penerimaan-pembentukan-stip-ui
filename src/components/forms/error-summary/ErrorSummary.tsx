import { AlertCircle } from "lucide-react";
import { forwardRef, useId } from "react";

import "./ErrorSummary.css";

import { joinClassNames } from "../shared";
import type { ErrorSummaryProps } from "./ErrorSummary.types";

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  function ErrorSummary(
    { className, items, title = "Periksa kembali data berikut.", ...props },
    ref,
  ) {
    const generatedTitleId = useId();

    if (items.length === 0) {
      return null;
    }

    return (
      <div
        {...props}
        ref={ref}
        aria-labelledby={generatedTitleId}
        className={joinClassNames("error-summary", className)}
        role="alert"
        tabIndex={-1}
      >
        <div className="error-summary__header">
          <AlertCircle aria-hidden="true" className="error-summary__icon" />

          <h2 className="error-summary__title" id={generatedTitleId}>
            {title}
          </h2>
        </div>

        <ul className="error-summary__list">
          {items.map((item) => (
            <li key={item.id}>
              {item.fieldId ? (
                <a className="error-summary__link" href={`#${item.fieldId}`}>
                  {item.message}
                </a>
              ) : (
                item.message
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

ErrorSummary.displayName = "ErrorSummary";
