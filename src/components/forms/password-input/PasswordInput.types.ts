import type { InputHTMLAttributes } from "react";

import type { FormControlSize } from "../shared";

export interface PasswordInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  /** Skala visual control. */
  size?: FormControlSize;

  /** Mengaktifkan visual invalid dan aria-invalid. */
  invalid?: boolean;

  /** Membuat control memenuhi lebar container. */
  fullWidth?: boolean;

  /** Menentukan apakah password terlihat saat pertama dirender. */
  defaultVisible?: boolean;

  /** Accessible label ketika password sedang tersembunyi. */
  showPasswordLabel?: string;

  /** Accessible label ketika password sedang terlihat. */
  hidePasswordLabel?: string;
}
