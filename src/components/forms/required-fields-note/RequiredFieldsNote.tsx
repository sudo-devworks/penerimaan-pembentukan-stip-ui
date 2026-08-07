import { forwardRef } from "react";

import "./RequiredFieldsNote.css";

import { joinClassNames } from "../shared";
import type { RequiredFieldsNoteProps } from "./RequiredFieldsNote.types";

export const RequiredFieldsNote = forwardRef<
  HTMLParagraphElement,
  RequiredFieldsNoteProps
>(function RequiredFieldsNote(
  {
    children = (
      <>
        Kolom bertanda <span aria-hidden="true">*</span> wajib diisi.
      </>
    ),
    className,
    ...props
  },
  ref,
) {
  return (
    <p
      {...props}
      ref={ref}
      className={joinClassNames("required-fields-note", className)}
    >
      {children}
    </p>
  );
});

RequiredFieldsNote.displayName = "RequiredFieldsNote";
