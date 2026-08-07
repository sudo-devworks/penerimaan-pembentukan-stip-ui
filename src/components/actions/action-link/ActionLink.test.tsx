import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { ArrowRight } from "lucide-react";
import { describe, expect, it } from "vitest";

import { ActionLink } from "./ActionLink";

describe("ActionLink", () => {
  it("renders a native anchor", () => {
    render(<ActionLink href="/program">Lihat program</ActionLink>);

    const link = screen.getByRole("link", {
      name: "Lihat program",
    });

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/program");
  });

  it("uses inline as default variant", () => {
    render(<ActionLink href="/detail">Lihat detail</ActionLink>);

    expect(
      screen.getByRole("link", {
        name: "Lihat detail",
      }),
    ).toHaveAttribute("data-variant", "inline");
  });

  it("renders decorative icons", () => {
    const { container } = render(
      <ActionLink
        href="/program"
        trailingIcon={<ArrowRight data-testid="arrow-icon" />}
      >
        Lihat program
      </ActionLink>,
    );

    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();

    expect(container.querySelector(".stip-action-link__icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("renders external indicator", () => {
    render(
      <ActionLink href="https://example.com" external>
        Buka situs resmi
      </ActionLink>,
    );

    expect(
      screen.getByRole("link", {
        name: "Buka situs resmi",
      }),
    ).toHaveAttribute("data-external", "true");
  });

  it("adds secure rel values for new tab", () => {
    render(
      <ActionLink href="https://example.com" target="_blank">
        Buka situs resmi
      </ActionLink>,
    );

    const link = screen.getByRole("link", {
      name: "Buka situs resmi",
    });

    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));

    expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("supports full width", () => {
    render(
      <ActionLink href="/program" fullWidth>
        Lihat program
      </ActionLink>,
    );

    expect(
      screen.getByRole("link", {
        name: "Lihat program",
      }),
    ).toHaveClass("stip-action-link", "stip-action-link--full-width");
  });

  it("forwards anchor ref", () => {
    const ref = createRef<HTMLAnchorElement>();

    render(
      <ActionLink ref={ref} href="/program">
        Lihat program
      </ActionLink>,
    );

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
