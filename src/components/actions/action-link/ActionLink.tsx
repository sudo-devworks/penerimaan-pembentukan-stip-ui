import { forwardRef } from "react";
import { ExternalLink } from "lucide-react";

import type { ActionLinkProps } from "./ActionLink.types";

import "./ActionLink.css";

const joinClassNames = (
  ...classNames: Array<string | false | null | undefined>
): string => classNames.filter(Boolean).join(" ");

const mergeRel = (
  target: string | undefined,
  rel: string | undefined,
): string | undefined => {
  if (target !== "_blank") {
    return rel;
  }

  return Array.from(
    new Set([
      ...(rel?.split(/\s+/).filter(Boolean) ?? []),
      "noopener",
      "noreferrer",
    ]),
  ).join(" ");
};

export const ActionLink = forwardRef<HTMLAnchorElement, ActionLinkProps>(
  (
    {
      children,
      variant = "inline",
      size = "md",
      external = false,
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      target,
      rel,
      className,
      ...anchorProps
    },
    ref,
  ) => (
    <a
      {...anchorProps}
      ref={ref}
      target={target}
      rel={mergeRel(target, rel)}
      data-variant={variant}
      data-size={size}
      data-external={external || undefined}
      className={joinClassNames(
        "stip-action-link",
        fullWidth && "stip-action-link--full-width",
        className,
      )}
    >
      {leadingIcon ? (
        <span className="stip-action-link__icon" aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}

      <span className="stip-action-link__label">{children}</span>

      {trailingIcon ? (
        <span className="stip-action-link__icon" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}

      {external ? (
        <span
          className="stip-action-link__icon stip-action-link__external-icon"
          aria-hidden="true"
        >
          <ExternalLink />
        </span>
      ) : null}
    </a>
  ),
);

ActionLink.displayName = "ActionLink";
