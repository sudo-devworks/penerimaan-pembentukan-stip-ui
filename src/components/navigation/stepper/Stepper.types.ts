import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

export type StepperOrientation = "horizontal" | "vertical";

export type StepperItemStatus = "upcoming" | "current" | "completed" | "error";

export interface StepperProps extends Omit<
  HTMLAttributes<HTMLOListElement>,
  "children"
> {
  /**
   * StepperItem composition.
   */
  children: ReactNode;

  /**
   * Accessible name describing the process.
   *
   * @default 'Tahapan proses'
   */
  label?: string;

  /**
   * Visual and semantic orientation.
   *
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;
}

interface StepperItemBaseProps {
  /**
   * Visible step title.
   */
  title: ReactNode;

  /**
   * Optional supporting text.
   */
  description?: ReactNode;

  /**
   * One-based display number.
   */
  step: number;

  /**
   * Current process status.
   *
   * @default 'upcoming'
   */
  status?: StepperItemStatus;

  /**
   * Optional replacement indicator content.
   */
  indicator?: ReactNode;

  /**
   * Additional class name.
   */
  className?: string;

  /**
   * Hides the connector after this item.
   *
   * Normally used by the final item.
   *
   * @default false
   */
  hideConnector?: boolean;
}

export interface StepperItemStaticProps
  extends StepperItemBaseProps, Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  href?: never;
  onClick?: never;
  disabled?: never;
}

export interface StepperItemLinkProps
  extends
    StepperItemBaseProps,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "title" | "children" | "href"
    > {
  href: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  disabled?: never;
}

export interface StepperItemButtonProps
  extends
    StepperItemBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title" | "children"> {
  href?: never;
  onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
}

export type StepperItemProps =
  StepperItemStaticProps | StepperItemLinkProps | StepperItemButtonProps;
