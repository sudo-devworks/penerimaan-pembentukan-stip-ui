import type { ReactNode, TextareaHTMLAttributes } from "react";

import type { FormControlSize } from "../shared";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: FormControlSize;
  leadingIcon?: ReactNode;
  trailingAction?: ReactNode;
  invalid?: boolean;
  fullWidth?: boolean;
}
