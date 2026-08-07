import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ErrorSummary } from "./ErrorSummary";

describe("ErrorSummary", () => {
  it("renders an alert with linked errors", () => {
    render(
      <ErrorSummary
        items={[
          {
            fieldId: "email",
            id: "email",
            message: "Masukkan alamat email yang valid.",
          },
        ]}
      />,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Masukkan alamat email yang valid.",
      }),
    ).toHaveAttribute("href", "#email");
  });

  it("renders an unlinked error", () => {
    render(
      <ErrorSummary
        items={[
          {
            id: "server",
            message: "Data tidak dapat disimpan.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Data tidak dapat disimpan.")).toBeInTheDocument();
  });

  it("renders nothing when there are no errors", () => {
    const { container } = render(<ErrorSummary items={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("can receive programmatic focus", () => {
    render(
      <ErrorSummary
        items={[
          {
            id: "error",
            message: "Data tidak valid.",
          },
        ]}
      />,
    );

    const summary = screen.getByRole("alert");

    summary.focus();

    expect(summary).toHaveFocus();
  });
});
