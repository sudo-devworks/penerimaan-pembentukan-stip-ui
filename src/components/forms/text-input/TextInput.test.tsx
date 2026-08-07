import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("renders a native input", () => {
    render(<TextInput aria-label="Nama Lengkap" />);

    expect(
      screen.getByRole("textbox", {
        name: "Nama Lengkap",
      }),
    ).toBeInstanceOf(HTMLInputElement);
  });

  it("supports native input type", () => {
    render(<TextInput aria-label="Alamat Email" type="email" />);

    expect(
      screen.getByRole("textbox", {
        name: "Alamat Email",
      }),
    ).toHaveAttribute("type", "email");
  });

  it("supports name and value", () => {
    render(
      <TextInput
        aria-label="Program"
        name="program"
        readOnly
        value="Nautika"
      />,
    );

    expect(screen.getByDisplayValue("Nautika")).toHaveAttribute(
      "name",
      "program",
    );
  });

  it("supports required state", () => {
    render(<TextInput aria-label="Nama Lengkap" required />);

    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("supports disabled state", () => {
    render(<TextInput aria-label="Program" disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("supports read-only state", () => {
    render(<TextInput aria-label="Nomor Pendaftaran" readOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("supports invalid state", () => {
    render(<TextInput aria-label="NIK" invalid />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("supports aria-describedby", () => {
    render(
      <>
        <TextInput aria-describedby="email-helper" aria-label="Email" />
        <p id="email-helper">Gunakan email aktif.</p>
      </>,
    );

    expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
      "Gunakan email aktif.",
    );
  });

  it("renders a leading icon as decorative", () => {
    render(
      <TextInput
        aria-label="Nama"
        leadingIcon={<svg data-testid="leading-icon" />}
      />,
    );

    expect(screen.getByTestId("leading-icon").parentElement).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("renders a trailing action", () => {
    render(
      <TextInput
        aria-label="Password"
        trailingAction={<button type="button">Tampilkan</button>}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Tampilkan",
      }),
    ).toBeInTheDocument();
  });

  it("supports full width", () => {
    const { container } = render(<TextInput aria-label="Field" />);

    expect(container.querySelector(".form-control-frame")).toHaveClass(
      "form-control-frame--full-width",
    );
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(<TextInput ref={ref} aria-label="Field" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("supports user typing", async () => {
    const user = userEvent.setup();

    render(<TextInput aria-label="Nama Lengkap" />);

    const input = screen.getByRole("textbox");

    await user.type(input, "Israa Ferdinan");

    expect(input).toHaveValue("Israa Ferdinan");
  });

  it("calls native change handler", () => {
    const onChange = vi.fn();

    render(<TextInput aria-label="Field" onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "Data baru",
      },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
