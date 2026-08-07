import { forwardRef } from "react";

import "./FileItem.css";

import type { FileItemProps } from "./FileItem.types";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

export const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  function FileItem(
    {
      actions,
      className,
      description,
      metadata,
      name,
      preview,
      progress,
      state = "default",
      status,
      ...itemProps
    },
    ref,
  ) {
    return (
      <div
        {...itemProps}
        ref={ref}
        className={joinClassNames(
          "file-item",
          `file-item--${state}`,
          className,
        )}
      >
        {preview ? <div className="file-item__preview">{preview}</div> : null}

        <div className="file-item__content">
          <div className="file-item__header">
            <div className="file-item__name">{name}</div>

            {status ? <div className="file-item__status">{status}</div> : null}
          </div>

          {description ? (
            <div className="file-item__description">{description}</div>
          ) : null}

          {metadata ? (
            <div className="file-item__metadata">{metadata}</div>
          ) : null}

          {progress ? (
            <div className="file-item__progress">{progress}</div>
          ) : null}
        </div>

        {actions ? <div className="file-item__actions">{actions}</div> : null}
      </div>
    );
  },
);

FileItem.displayName = "FileItem";
