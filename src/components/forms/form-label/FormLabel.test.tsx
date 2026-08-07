import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { FormLabel } from "./FormLabel";

describe("FormLabel", () => {
  it("renders a native label", () => {
    render(<FormLabel htmlFor="email">Alamat Email</FormLabel>);

    const label = screen.getByText("Alamat Email").closest("label");

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "email");
  });

  it("renders a required indicator", () => {
    render(
      <FormLabel htmlFor="name" required>
        Nama Lengkap
      </FormLabel>,
    );

    expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
  });

  it("renders an optional indicator", () => {
    render(
      <FormLabel htmlFor="note" optional>
        Catatan
      </FormLabel>,
    );

    expect(screen.getByText("Opsional")).toBeInTheDocument();
  });

  it("prioritizes required when required and optional are both provided", () => {
    const warnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);

    render(
      <FormLabel htmlFor="field" optional required>
        Field
      </FormLabel>,
    );

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.queryByText("Opsional")).not.toBeInTheDocument();

    warnSpy.mockRestore();
  });

  it("forwards native label attributes", () => {
    render(
      <FormLabel data-testid="label" htmlFor="email">
        Email
      </FormLabel>,
    );

    expect(screen.getByTestId("label")).toHaveAttribute("for", "email");
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLLabelElement>();

    render(
      <FormLabel ref={ref} htmlFor="email">
        Email
      </FormLabel>,
    );

    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
