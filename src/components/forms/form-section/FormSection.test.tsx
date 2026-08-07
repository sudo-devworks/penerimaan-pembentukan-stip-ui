import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FormSection } from "./FormSection";

describe("FormSection", () => {
  it("renders a semantic section", () => {
    render(
      <FormSection title="Data Pribadi">
        <p>Isi form</p>
      </FormSection>,
    );

    expect(
      screen.getByRole("region", {
        name: "Data Pribadi",
      }),
    ).toBeInstanceOf(HTMLElement);
  });

  it("renders description and actions", () => {
    render(
      <FormSection
        actions={<button>Ubah</button>}
        description="Informasi dasar peserta."
        title="Data Pribadi"
      >
        <p>Isi form</p>
      </FormSection>,
    );

    expect(screen.getByText("Informasi dasar peserta.")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Ubah",
      }),
    ).toBeInTheDocument();
  });

  it("supports an accessible label without title", () => {
    render(
      <FormSection aria-label="Dokumen peserta">
        <p>Isi dokumen</p>
      </FormSection>,
    );

    expect(
      screen.getByRole("region", {
        name: "Dokumen peserta",
      }),
    ).toBeInTheDocument();
  });
});
