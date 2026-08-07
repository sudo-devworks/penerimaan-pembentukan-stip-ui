import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OverlayPortal } from "./OverlayPortal";

describe("OverlayPortal", () => {
  it("renders content into document body by default", () => {
    render(
      <div data-testid="source">
        <OverlayPortal>
          <div data-testid="portal-content">Portal content</div>
        </OverlayPortal>
      </div>,
    );

    const source = screen.getByTestId("source");

    const content = screen.getByTestId("portal-content");

    expect(content).toBeInTheDocument();
    expect(source).not.toContainElement(content);
    expect(document.body).toContainElement(content);
  });

  it("supports a custom portal container", () => {
    const container = document.createElement("div");

    container.setAttribute("data-testid", "custom-container");

    document.body.appendChild(container);

    render(
      <OverlayPortal container={container}>
        <div data-testid="portal-content">Custom portal content</div>
      </OverlayPortal>,
    );

    expect(container).toContainElement(screen.getByTestId("portal-content"));

    container.remove();
  });

  it("preserves React context through the portal", () => {
    render(
      <OverlayPortal>
        <div data-testid="portal-content">Context remains available</div>
      </OverlayPortal>,
    );

    expect(screen.getByTestId("portal-content")).toHaveTextContent(
      "Context remains available",
    );
  });
});
