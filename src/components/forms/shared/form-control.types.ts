import type { ReactNode } from "react";

export type FormControlSize = "sm" | "md" | "lg";

export type FormMessageContent = ReactNode;

export interface FormSupportingMessageProps {
  children: FormMessageContent;
  className?: string;
  id?: string;
}

export interface FormFieldMessageIds {
  helperId?: string;
  requirementId?: string;
  errorId?: string;
  characterCountId?: string;
}
