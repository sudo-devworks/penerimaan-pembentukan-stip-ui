import { FileText, Upload } from "lucide-react";
import { forwardRef, useId, useState } from "react";

import "./FileInput.css";

import { joinClassNames } from "../shared";
import type { FileInputProps } from "./FileInput.types";

function getDefaultSelectedFileText(files: FileList): string {
  if (files.length === 1) {
    return files[0]?.name ?? "";
  }

  return `${files.length} file dipilih`;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(
    {
      accept,
      className,
      disabled = false,
      emptyText = "Belum ada file dipilih",
      fullWidth = true,
      id,
      invalid = false,
      label = "Pilih file",
      multiple = false,
      onChange,
      onFilesChange,
      selectedFileText = getDefaultSelectedFileText,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const resolvedId = id ?? generatedId;

    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const hasFiles = selectedFiles !== null && selectedFiles.length > 0;

    return (
      <div
        className={joinClassNames(
          "file-input",
          fullWidth && "file-input--full-width",
          className,
        )}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={invalid ? "true" : undefined}
      >
        <input
          {...props}
          ref={ref}
          accept={accept}
          aria-invalid={invalid ? true : props["aria-invalid"]}
          className="file-input__native"
          disabled={disabled}
          id={resolvedId}
          multiple={multiple}
          type="file"
          onChange={(event) => {
            const files = event.currentTarget.files;

            setSelectedFiles(files);
            onChange?.(event);
            onFilesChange?.(files, event);
          }}
        />

        <label className="file-input__trigger" htmlFor={resolvedId}>
          <span aria-hidden="true" className="file-input__trigger-icon">
            <Upload />
          </span>

          <span className="file-input__trigger-label">{label}</span>
        </label>

        <div aria-live="polite" className="file-input__selection">
          <FileText aria-hidden="true" className="file-input__selection-icon" />

          <span
            className={joinClassNames(
              "file-input__selection-text",
              !hasFiles && "file-input__selection-text--empty",
            )}
          >
            {hasFiles ? selectedFileText(selectedFiles) : emptyText}
          </span>
        </div>
      </div>
    );
  },
);

FileInput.displayName = "FileInput";
