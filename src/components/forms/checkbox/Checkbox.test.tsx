import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders a native checkbox", () => {
    render(<Checkbox label="Saya menyetujui" />);

    expect(
      screen.getByRole("checkbox", {
        name: "Saya menyetujui",
      }),
    ).toBeInstanceOf(HTMLInputElement);
  });

  it("supports defaultChecked", () => {
    render(<Checkbox defaultChecked label="Saya menyetujui" />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports user activation through its label", async () => {
    const user = userEvent.setup();

    render(<Checkbox label="Saya menyetujui" />);

    await user.click(screen.getByText("Saya menyetujui"));

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();

    render(<Checkbox label="Saya menyetujui" />);

    const checkbox = screen.getByRole("checkbox");

    checkbox.focus();
    await user.keyboard(" ");

    expect(checkbox).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Checkbox disabled label="Saya menyetujui" />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("supports indeterminate state", () => {
    render(<Checkbox indeterminate label="Pilih semua" />);

    expect(screen.getByRole("checkbox")).toHaveProperty("indeterminate", true);
  });

  it("associates its description", () => {
    render(
      <Checkbox
        description="Periksa data terlebih dahulu."
        id="agreement"
        label="Saya menyetujui"
      />,
    );

    expect(screen.getByRole("checkbox")).toHaveAccessibleDescription(
      "Periksa data terlebih dahulu.",
    );
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} label="Saya menyetujui" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
