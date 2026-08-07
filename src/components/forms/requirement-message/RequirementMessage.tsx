import type { HTMLAttributes } from "react";

import { joinClassNames } from "../shared";
import type { FormSupportingMessageProps } from "../shared";

export type RequirementMessageProps = FormSupportingMessageProps &
  Omit<HTMLAttributes<HTMLParagraphElement>, "children">;

export function RequirementMessage({
  children,
  className,
  ...props
}: RequirementMessageProps) {
  return (
    <p
      {...props}
      className={joinClassNames(
        "form-supporting-message",
        "form-requirement-message",
        className,
      )}
      data-message-type="requirement"
    >
      {children}
    </p>
  );
}
