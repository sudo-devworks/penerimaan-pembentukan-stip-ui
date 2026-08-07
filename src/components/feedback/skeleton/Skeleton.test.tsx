import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "./Skeleton";
import { SkeletonBlock } from "./SkeletonBlock";
import { SkeletonText } from "./SkeletonText";

describe("Skeleton", () => {
  it("is decorative by default", () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("supports an accessible label", () => {
    render(<Skeleton label="Memuat ringkasan peserta" />);

    expect(
      screen.getByRole("status", {
        name: "Memuat ringkasan peserta",
      }),
    ).toBeInTheDocument();
  });

  it("supports width and height", () => {
    const { container } = render(<Skeleton width="50%" height="24px" />);

    expect(container.firstChild).toHaveStyle({
      width: "50%",
      height: "24px",
    });
  });

  it("supports circular presentation", () => {
    const { container } = render(<Skeleton circular />);

    expect(container.firstChild).toHaveAttribute("data-circular", "true");
  });

  it("renders SkeletonText lines", () => {
    const { container } = render(<SkeletonText lines={4} />);

    expect(
      container.querySelectorAll(".stip-skeleton-text__line"),
    ).toHaveLength(4);
  });

  it("renders at least one text line", () => {
    const { container } = render(<SkeletonText lines={0} />);

    expect(
      container.querySelectorAll(".stip-skeleton-text__line"),
    ).toHaveLength(1);
  });

  it("renders SkeletonBlock", () => {
    const { container } = render(<SkeletonBlock height="160px" />);

    expect(container.firstChild).toHaveClass("stip-skeleton-block");
  });
});
