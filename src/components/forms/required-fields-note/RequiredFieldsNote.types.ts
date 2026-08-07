import type { HTMLAttributes, ReactNode } from "react";

export interface RequiredFieldsNoteProps extends Omit<
  HTMLAttributes<HTMLParagraphElement>,
  "children"
> {
  children?: ReactNode;
}
