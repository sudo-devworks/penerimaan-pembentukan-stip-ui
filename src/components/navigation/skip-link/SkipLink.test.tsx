import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SkipLink } from "./SkipLink";

describe("SkipLink", () => {
  it("targets main content by default", () => {
    render(<SkipLink>Lewati ke konten utama</SkipLink>);

    expect(
      screen.getByRole("link", {
        name: "Lewati ke konten utama",
      }),
    ).toHaveAttribute("href", "#main-content");
  });

  it("supports a custom fragment target", () => {
    render(
      <SkipLink href="#participant-content">Lewati ke data peserta</SkipLink>,
    );

    expect(
      screen.getByRole("link", {
        name: "Lewati ke data peserta",
      }),
    ).toHaveAttribute("href", "#participant-content");
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLAnchorElement>();

    render(<SkipLink ref={ref}>Lewati ke konten utama</SkipLink>);

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
