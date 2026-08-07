import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoadingIndicator } from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  it("renders an accessible loading status", () => {
    render(<LoadingIndicator label="Memuat data peserta" />);

    expect(
      screen.getByRole("status", {
        name: "Memuat data peserta",
      }),
    ).toBeInTheDocument();
  });

  it("supports decorative mode", () => {
    const { container } = render(<LoadingIndicator decorative />);

    const indicator = container.firstChild;

    expect(indicator).toHaveAttribute("aria-hidden", "true");

    expect(indicator).not.toHaveAttribute("role");
  });

  it("supports visual sizes", () => {
    const { container } = render(<LoadingIndicator size="lg" />);

    expect(container.firstChild).toHaveAttribute("data-size", "lg");
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLSpanElement>();

    render(<LoadingIndicator ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
