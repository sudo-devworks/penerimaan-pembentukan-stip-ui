import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FeedbackIcon } from "./FeedbackIcon";

describe("FeedbackIcon", () => {
  it("renders the default neutral icon", () => {
    const { container } = render(<FeedbackIcon />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveAttribute("focusable", "false");
  });

  it.each(["info", "success", "warning", "danger", "neutral"] as const)(
    "renders severity %s",
    (severity) => {
      const { container } = render(<FeedbackIcon severity={severity} />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    },
  );
});
