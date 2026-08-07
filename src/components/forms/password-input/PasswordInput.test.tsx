import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { PasswordInput } from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders a native password input", () => {
    render(<PasswordInput aria-label="Password" />);

    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  it("shows the password when toggle is activated", async () => {
    const user = userEvent.setup();

    render(<PasswordInput aria-label="Password" defaultValue="Password123" />);

    await user.click(
      screen.getByRole("button", {
        name: "Tampilkan password",
      }),
    );

    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");

    expect(
      screen.getByRole("button", {
        name: "Sembunyikan password",
      }),
    ).toBeInTheDocument();
  });

  it("hides the password again", async () => {
    const user = userEvent.setup();

    render(
      <PasswordInput
        aria-label="Password"
        defaultValue="Password123"
        defaultVisible
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Sembunyikan password",
      }),
    );

    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  it("does not change the input value when toggled", async () => {
    const user = userEvent.setup();

    render(<PasswordInput aria-label="Password" defaultValue="Password123" />);

    const input = screen.getByLabelText("Password");

    await user.click(
      screen.getByRole("button", {
        name: "Tampilkan password",
      }),
    );

    expect(input).toHaveValue("Password123");
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();

    render(<PasswordInput aria-label="Password" defaultValue="Password123" />);

    const button = screen.getByRole("button", {
      name: "Tampilkan password",
    });

    button.focus();
    await user.keyboard("{Enter}");

    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
  });

  it("disables the toggle when input is disabled", () => {
    render(<PasswordInput aria-label="Password" disabled />);

    expect(
      screen.getByRole("button", {
        name: "Tampilkan password",
      }),
    ).toBeDisabled();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(<PasswordInput ref={ref} aria-label="Password" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
