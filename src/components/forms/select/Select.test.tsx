import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Select } from "./Select";

describe("Select", () => {
  it("renders a native select", () => {
    render(
      <Select aria-label="Program">
        <option>Nautika</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Program",
      }),
    ).toBeInstanceOf(HTMLSelectElement);
  });

  it("supports selecting an option", async () => {
    const user = userEvent.setup();

    render(
      <Select aria-label="Program">
        <option value="">Pilih program</option>
        <option value="nautika">Nautika</option>
      </Select>,
    );

    await user.selectOptions(screen.getByRole("combobox"), "nautika");

    expect(screen.getByRole("combobox")).toHaveValue("nautika");
  });

  it("supports disabled state", () => {
    render(
      <Select aria-label="Program" disabled>
        <option>Nautika</option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("supports required state", () => {
    render(
      <Select aria-label="Program" required>
        <option>Nautika</option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toBeRequired();
  });

  it("supports invalid state", () => {
    render(
      <Select aria-label="Program" invalid>
        <option>Nautika</option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("calls the native change handler", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Select aria-label="Program" onChange={onChange}>
        <option value="">Pilih</option>
        <option value="nautika">Nautika</option>
      </Select>,
    );

    await user.selectOptions(screen.getByRole("combobox"), "nautika");

    expect(onChange).toHaveBeenCalled();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLSelectElement>();

    render(
      <Select ref={ref} aria-label="Program">
        <option>Nautika</option>
      </Select>,
    );

    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
