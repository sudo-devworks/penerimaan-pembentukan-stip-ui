import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Radio } from "../radio";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders fieldset and legend semantics", () => {
    render(
      <RadioGroup legend="Jenis Kelamin">
        <Radio label="Laki-laki" name="gender" value="male" />
        <Radio label="Perempuan" name="gender" value="female" />
      </RadioGroup>,
    );

    expect(
      screen.getByRole("group", {
        name: "Jenis Kelamin",
      }),
    ).toBeInstanceOf(HTMLFieldSetElement);
  });

  it("shares a native group name", () => {
    render(
      <RadioGroup legend="Program">
        <Radio label="Nautika" name="program" value="nautika" />
        <Radio label="Teknika" name="program" value="teknika" />
      </RadioGroup>,
    );

    expect(
      screen.getByRole("radio", {
        name: "Nautika",
      }),
    ).toHaveAttribute("name", "program");

    expect(
      screen.getByRole("radio", {
        name: "Teknika",
      }),
    ).toHaveAttribute("name", "program");
  });

  it("allows one selected option", async () => {
    const user = userEvent.setup();

    render(
      <RadioGroup legend="Program">
        <Radio label="Nautika" name="program" value="nautika" />
        <Radio label="Teknika" name="program" value="teknika" />
      </RadioGroup>,
    );

    await user.click(
      screen.getByRole("radio", {
        name: "Nautika",
      }),
    );

    expect(
      screen.getByRole("radio", {
        name: "Nautika",
      }),
    ).toBeChecked();

    await user.click(
      screen.getByRole("radio", {
        name: "Teknika",
      }),
    );

    expect(
      screen.getByRole("radio", {
        name: "Teknika",
      }),
    ).toBeChecked();

    expect(
      screen.getByRole("radio", {
        name: "Nautika",
      }),
    ).not.toBeChecked();
  });

  it("supports a disabled option", () => {
    render(
      <RadioGroup legend="Program">
        <Radio disabled label="Nautika" name="program" value="nautika" />
      </RadioGroup>,
    );

    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("supports disabled fieldset behavior", () => {
    render(
      <RadioGroup disabled legend="Program">
        <Radio label="Nautika" name="program" value="nautika" />
      </RadioGroup>,
    );

    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("renders group helper and error messages", () => {
    render(
      <RadioGroup
        errorMessage="Pilih satu program."
        helperText="Pilih program yang tersedia."
        id="program"
        invalid
        legend="Program"
      >
        <Radio label="Nautika" name="program" value="nautika" />
      </RadioGroup>,
    );

    expect(screen.getByText("Pilih program yang tersedia.")).toHaveAttribute(
      "id",
      "program-helper",
    );

    expect(screen.getByText("Pilih satu program.")).toHaveAttribute(
      "id",
      "program-error",
    );
  });
  it("renders a visual dot for every radio option", () => {
    const { container } = render(
      <RadioGroup legend="Program">
        <Radio label="Nautika" name="program" value="nautika" />
        <Radio label="Teknika" name="program" value="teknika" />
      </RadioGroup>,
    );

    expect(container.querySelectorAll(".radio__dot")).toHaveLength(2);
  });
});
