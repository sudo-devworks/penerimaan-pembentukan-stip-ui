import type { FieldsetHTMLAttributes, ReactNode } from "react";

export interface CheckboxGroupProps extends Omit<
  FieldsetHTMLAttributes<HTMLFieldSetElement>,
  "children"
> {
  children: ReactNode;
  legend: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  invalid?: boolean;
  orientation?: "vertical" | "horizontal";
  required?: boolean;
}
