import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface BackNavigationBaseProps {
  /**
   * Visible navigation label.
   */
  children: ReactNode;

  /**
   * Optional custom leading icon.
   */
  icon?: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;
}

export type BackNavigationLinkProps = BackNavigationBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
    disabled?: never;
  };

export type BackNavigationButtonProps = BackNavigationBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
    onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
  };

export type BackNavigationProps =
  BackNavigationLinkProps | BackNavigationButtonProps;
