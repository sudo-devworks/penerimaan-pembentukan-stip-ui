import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

import { TextInput } from "../text-input";
import type { PasswordInputProps } from "./PasswordInput.types";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {
      defaultVisible = false,
      disabled = false,
      fullWidth = true,
      hidePasswordLabel = "Sembunyikan password",
      invalid = false,
      readOnly = false,
      showPasswordLabel = "Tampilkan password",
      size = "md",
      ...props
    },
    ref,
  ) {
    const [visible, setVisible] = useState(defaultVisible);

    const toggleLabel = visible ? hidePasswordLabel : showPasswordLabel;

    return (
      <TextInput
        {...props}
        ref={ref}
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        readOnly={readOnly}
        size={size}
        trailingAction={
          <button
            aria-label={toggleLabel}
            className="form-control-action"
            disabled={disabled}
            type="button"
            onClick={() => {
              setVisible((current) => !current);
            }}
          >
            {visible ? (
              <EyeOff aria-hidden="true" />
            ) : (
              <Eye aria-hidden="true" />
            )}
          </button>
        }
        type={visible ? "text" : "password"}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
