import type { HTMLAttributes, ReactNode } from "react";

export type FileItemState =
  "default" | "uploading" | "success" | "warning" | "error";

export interface FileItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  name: ReactNode;
  description?: ReactNode;
  metadata?: ReactNode;
  preview?: ReactNode;
  status?: ReactNode;
  progress?: ReactNode;
  actions?: ReactNode;
  state?: FileItemState;
}
