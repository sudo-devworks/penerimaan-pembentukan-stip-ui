import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FormActions } from "./FormActions";

describe("FormActions", () => {
  it("renders action children", () => {
    render(
      <FormActions>
        <button>Simpan</button>
      </FormActions>,
    );

    expect(
      screen.getByRole("button", {
        name: "Simpan",
      }),
    ).toBeInTheDocument();
  });

  it("exposes alignment", () => {
    render(
      <FormActions align="between" data-testid="actions">
        <button>Kembali</button>
        <button>Simpan</button>
      </FormActions>,
    );

    expect(screen.getByTestId("actions")).toHaveAttribute(
      "data-align",
      "between",
    );
  });

  it("supports divided presentation", () => {
    render(
      <FormActions data-testid="actions" divided>
        <button>Simpan</button>
      </FormActions>,
    );

    expect(screen.getByTestId("actions")).toHaveClass("form-actions--divided");
  });

  it("supports mobile stacking", () => {
    render(
      <FormActions data-testid="actions">
        <button>Simpan</button>
      </FormActions>,
    );

    expect(screen.getByTestId("actions")).toHaveClass(
      "form-actions--stack-mobile",
    );
  });
});
