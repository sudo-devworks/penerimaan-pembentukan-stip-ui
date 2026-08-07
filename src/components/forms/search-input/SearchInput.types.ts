import type { ChangeEvent, InputHTMLAttributes } from "react";

import type { FormControlSize } from "../shared";

export interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  size?: FormControlSize;
  invalid?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  clearable?: boolean;
  clearLabel?: string;
  onClear?: () => void;
  onValueChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}
