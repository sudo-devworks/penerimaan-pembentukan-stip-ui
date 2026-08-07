import { LoaderCircle, Search, X } from "lucide-react";
import { forwardRef, useState } from "react";

import { TextInput } from "../text-input";
import type { SearchInputProps } from "./SearchInput.types";

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      clearable = true,
      clearLabel = "Hapus pencarian",
      defaultValue,
      disabled = false,
      fullWidth = true,
      invalid = false,
      loading = false,
      onChange,
      onClear,
      onValueChange,
      readOnly = false,
      size = "md",
      value,
      ...props
    },
    ref,
  ) {
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState(() =>
      defaultValue === undefined ? "" : String(defaultValue),
    );

    const resolvedValue = isControlled ? String(value ?? "") : internalValue;

    const hasValue = resolvedValue.trim().length > 0;

    return (
      <TextInput
        {...props}
        ref={ref}
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        leadingIcon={<Search />}
        readOnly={readOnly}
        size={size}
        type="search"
        value={resolvedValue}
        onChange={(event) => {
          if (!isControlled) {
            setInternalValue(event.target.value);
          }

          onChange?.(event);
          onValueChange?.(event.target.value, event);
        }}
        trailingAction={
          loading ? (
            <span
              aria-label="Pencarian sedang diproses"
              className="search-input__loading"
              role="status"
            >
              <LoaderCircle aria-hidden="true" />
            </span>
          ) : clearable && hasValue && !readOnly ? (
            <button
              aria-label={clearLabel}
              className="form-control-action"
              disabled={disabled}
              type="button"
              onClick={() => {
                if (!isControlled) {
                  setInternalValue("");
                }

                onClear?.();
              }}
            >
              <X aria-hidden="true" />
            </button>
          ) : undefined
        }
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
