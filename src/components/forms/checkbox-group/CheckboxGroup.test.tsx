import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Checkbox } from "../checkbox";
import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  it("renders native fieldset and legend semantics", () => {
    render(
      <CheckboxGroup legend="Kategori dokumen">
        <Checkbox label="Identitas" />
        <Checkbox label="Pendidikan" />
      </CheckboxGroup>,
    );

    expect(
      screen.getByRole("group", {
        name: "Kategori dokumen",
      }),
    ).toBeInstanceOf(HTMLFieldSetElement);
  });

  it("supports disabled fieldset behavior", () => {
    render(
      <CheckboxGroup disabled legend="Kategori dokumen">
        <Checkbox label="Identitas" />
      </CheckboxGroup>,
    );

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("renders helper and error messages", () => {
    render(
      <CheckboxGroup
        errorMessage="Pilih minimal satu kategori."
        helperText="Pilih satu atau lebih kategori."
        id="categories"
        invalid
        legend="Kategori dokumen"
      >
        <Checkbox label="Identitas" />
      </CheckboxGroup>,
    );

    expect(screen.getByText("Pilih satu atau lebih kategori.")).toHaveAttribute(
      "id",
      "categories-helper",
    );

    expect(screen.getByText("Pilih minimal satu kategori.")).toHaveAttribute(
      "id",
      "categories-error",
    );
  });

  it("exposes horizontal orientation", () => {
    render(
      <CheckboxGroup
        data-testid="group"
        legend="Status"
        orientation="horizontal"
      >
        <Checkbox label="Aktif" />
      </CheckboxGroup>,
    );

    expect(screen.getByTestId("group")).toHaveAttribute(
      "data-orientation",
      "horizontal",
    );
  });
});
