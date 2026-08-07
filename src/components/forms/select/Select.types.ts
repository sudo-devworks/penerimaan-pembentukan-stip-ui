import type { ReactNode, SelectHTMLAttributes } from "react";

import type { FormControlSize } from "../shared";

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  size?: FormControlSize;
  invalid?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
}
