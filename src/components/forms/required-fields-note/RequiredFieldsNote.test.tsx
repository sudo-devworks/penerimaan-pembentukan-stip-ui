import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RequiredFieldsNote } from "./RequiredFieldsNote";

describe("RequiredFieldsNote", () => {
  it("renders the default required-field explanation", () => {
    render(<RequiredFieldsNote />);

    expect(screen.getByText(/Kolom bertanda/)).toBeInTheDocument();

    expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
  });

  it("supports custom content", () => {
    render(<RequiredFieldsNote>Seluruh kolom wajib diisi.</RequiredFieldsNote>);

    expect(screen.getByText("Seluruh kolom wajib diisi.")).toBeInTheDocument();
  });
});
