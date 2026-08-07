import type { HTMLAttributes, ReactNode } from "react";

export interface FormFieldProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: ReactNode;
  label?: ReactNode;
  htmlFor?: string;
  helperText?: ReactNode;
  requirementMessage?: ReactNode;
  errorMessage?: ReactNode;
  required?: boolean;
  optional?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  characterCount?: ReactNode;
  helperTextId?: string;
  requirementMessageId?: string;
  errorMessageId?: string;
  characterCountId?: string;
}
