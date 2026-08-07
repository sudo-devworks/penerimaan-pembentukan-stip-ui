import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface FileInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> {
  /** Label pada visible file-selection trigger. */
  label?: ReactNode;

  /** Teks saat belum ada file yang dipilih. */
  emptyText?: ReactNode;

  /** Custom renderer untuk nama atau jumlah file terpilih. */
  selectedFileText?: (files: FileList) => ReactNode;

  /** Mengaktifkan visual invalid dan aria-invalid. */
  invalid?: boolean;

  /** Membuat component memenuhi lebar container. */
  fullWidth?: boolean;

  /** Dipanggil setelah native file selection berubah. */
  onFilesChange?: (
    files: FileList | null,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
}
