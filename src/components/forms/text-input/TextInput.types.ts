import type { InputHTMLAttributes, ReactNode } from "react";

import type { FormControlSize } from "../shared";

export interface TextInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /** Skala visual control. Density tetap diwarisi dari ancestor. */
  size?: FormControlSize;

  /** Icon dekoratif pada sisi awal control. */
  leadingIcon?: ReactNode;

  /** Action interaktif pada sisi akhir control. */
  trailingAction?: ReactNode;

  /** Mengaktifkan visual invalid dan aria-invalid. */
  invalid?: boolean;

  /** Membuat wrapper memenuhi lebar container. */
  fullWidth?: boolean;
}
