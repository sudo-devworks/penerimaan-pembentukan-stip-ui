import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders a native textarea", () => {
    render(<Textarea aria-label="Alamat Domisili" />);

    expect(
      screen.getByRole("textbox", {
        name: "Alamat Domisili",
      }),
    ).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("supports required state", () => {
    render(<Textarea aria-label="Alamat" required />);

    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("supports disabled state", () => {
    render(<Textarea aria-label="Catatan" disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("supports read-only state", () => {
    render(<Textarea aria-label="Catatan" readOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("supports invalid state", () => {
    render(<Textarea aria-label="Alamat" invalid />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("supports maxLength", () => {
    render(<Textarea aria-label="Alamat" maxLength={500} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "500");
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} aria-label="Alamat" />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("supports user typing", async () => {
    const user = userEvent.setup();

    render(<Textarea aria-label="Alamat" />);

    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "Jakarta Utara");

    expect(textarea).toHaveValue("Jakarta Utara");
  });
});
