import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders an error message", () => {
    render(
      <ErrorMessage id="email-error">Format email tidak valid.</ErrorMessage>,
    );

    expect(screen.getByText("Format email tidak valid.")).toHaveAttribute(
      "id",
      "email-error",
    );
  });

  it("does not announce aggressively by default", () => {
    render(<ErrorMessage>Format email tidak valid.</ErrorMessage>);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("allows an application to provide aria-live explicitly", () => {
    render(
      <ErrorMessage aria-live="polite">Format email tidak valid.</ErrorMessage>,
    );

    expect(screen.getByText("Format email tidak valid.")).toHaveAttribute(
      "aria-live",
      "polite",
    );
  });
});
