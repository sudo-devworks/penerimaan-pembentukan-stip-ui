import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type NavigationLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
>;

export type NavigationButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

export type NavigationInteractionProps =
  | {
      href: string;
      onClick?: NavigationLinkProps["onClick"];
      disabled?: never;
    }
  | {
      href?: never;
      onClick: NavigationButtonProps["onClick"];
      disabled?: boolean;
    };
