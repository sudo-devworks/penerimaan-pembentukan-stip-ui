import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { Check, CircleAlert } from "lucide-react";

import { joinNavigationClassNames } from "../shared";
import type { StepperItemProps } from "./Stepper.types";

type StepperItemAnchorInteractionProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href" | "title"
> & {
  href: string;
};

type StepperItemButtonInteractionProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "title"
> & {
  href?: never;
  onClick: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>;
};

type StepperItemStaticInteractionProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  href?: never;
  onClick?: never;
  disabled?: never;
};

const getDefaultIndicator = ({
  status,
  step,
}: {
  status: StepperItemProps["status"];
  step: number;
}): ReactNode => {
  if (status === "completed") {
    return <Check />;
  }

  if (status === "error") {
    return <CircleAlert />;
  }

  return step;
};

export const StepperItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  StepperItemProps
>(
  (
    {
      title,
      description,
      step,
      status = "upcoming",
      indicator,
      hideConnector = false,
      className,
      ...interactionProps
    },
    ref,
  ) => {
    const indicatorContent =
      indicator ??
      getDefaultIndicator({
        status,
        step,
      });

    const content = (
      <>
        <span aria-hidden="true" className="stip-stepper-item__indicator">
          {indicatorContent}
        </span>

        <span className="stip-stepper-item__content">
          <span className="stip-stepper-item__title">{title}</span>

          {description ? (
            <span className="stip-stepper-item__description">
              {description}
            </span>
          ) : null}
        </span>
      </>
    );

    const itemClassName = joinNavigationClassNames(
      "stip-stepper-item__control",
      className,
    );

    const currentAttributes =
      status === "current"
        ? {
            "aria-current": "step" as const,
          }
        : {};

    let control: ReactNode;

    if (typeof interactionProps.href === "string") {
      const { href, ...anchorProps } =
        interactionProps as StepperItemAnchorInteractionProps;

      control = (
        <a
          {...anchorProps}
          {...currentAttributes}
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={joinNavigationClassNames(
            itemClassName,
            "stip-stepper-item__control--interactive",
          )}
        >
          {content}
        </a>
      );
    } else if (typeof interactionProps.onClick === "function") {
      const {
        type = "button",
        disabled = false,
        ...buttonProps
      } = interactionProps as StepperItemButtonInteractionProps;

      control = (
        <button
          {...buttonProps}
          {...currentAttributes}
          ref={ref as Ref<HTMLButtonElement>}
          type={type}
          disabled={disabled}
          className={joinNavigationClassNames(
            itemClassName,
            "stip-stepper-item__control--interactive",
          )}
        >
          {content}
        </button>
      );
    } else {
      const staticProps = interactionProps as StepperItemStaticInteractionProps;

      control = (
        <div
          {...staticProps}
          {...currentAttributes}
          ref={ref as Ref<HTMLDivElement>}
          className={itemClassName}
        >
          {content}
        </div>
      );
    }

    return (
      <li
        data-status={status}
        data-hide-connector={hideConnector || undefined}
        className="stip-stepper-item"
      >
        {control}

        {!hideConnector ? (
          <span aria-hidden="true" className="stip-stepper-item__connector" />
        ) : null}
      </li>
    );
  },
);

StepperItem.displayName = "StepperItem";
