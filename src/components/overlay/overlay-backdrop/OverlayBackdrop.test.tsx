import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { OverlayBackdrop } from "./OverlayBackdrop";

describe("OverlayBackdrop", () => {
  it("renders its content", () => {
    render(
      <OverlayBackdrop>
        <div>Overlay content</div>
      </OverlayBackdrop>,
    );

    expect(screen.getByText("Overlay content")).toBeInTheDocument();
  });

  it("calls onBackdropClick when backdrop is activated", () => {
    const onBackdropClick = vi.fn();

    render(
      <OverlayBackdrop data-testid="backdrop" onBackdropClick={onBackdropClick}>
        <div>Overlay content</div>
      </OverlayBackdrop>,
    );

    fireEvent.mouseDown(screen.getByTestId("backdrop"));

    expect(onBackdropClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onBackdropClick for descendant interaction", () => {
    const onBackdropClick = vi.fn();

    render(
      <OverlayBackdrop onBackdropClick={onBackdropClick}>
        <button type="button">Inside action</button>
      </OverlayBackdrop>,
    );

    fireEvent.mouseDown(
      screen.getByRole("button", {
        name: "Inside action",
      }),
    );

    expect(onBackdropClick).not.toHaveBeenCalled();
  });

  it("respects a prevented mouse down event", () => {
    const onBackdropClick = vi.fn();

    render(
      <OverlayBackdrop
        data-testid="backdrop"
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        onBackdropClick={onBackdropClick}
      />,
    );

    fireEvent.mouseDown(screen.getByTestId("backdrop"));

    expect(onBackdropClick).not.toHaveBeenCalled();
  });

  it("locks body scrolling when requested", () => {
    const { unmount } = render(
      <OverlayBackdrop lockScroll>
        <div>Modal content</div>
      </OverlayBackdrop>,
    );

    expect(document.body.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("");
  });
});
