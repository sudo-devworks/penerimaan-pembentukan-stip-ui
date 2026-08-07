import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pencil } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import { TextAction } from "./TextAction";

describe("TextAction", () => {
  it("renders a native button", () => {
    render(<TextAction>Lihat detail</TextAction>);

    const button = screen.getByRole("button", {
      name: "Lihat detail",
    });

    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
  });

  it("calls click handler", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<TextAction onClick={handleClick}>Ubah</TextAction>);

    await user.click(
      screen.getByRole("button", {
        name: "Ubah",
      }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not run when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <TextAction disabled onClick={handleClick}>
        Hapus filter
      </TextAction>,
    );

    const button = screen.getByRole("button", {
      name: "Hapus filter",
    });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses loading label", () => {
    render(
      <TextAction loading loadingLabel="Memuat...">
        Tampilkan semua
      </TextAction>,
    );

    const button = screen.getByRole("button", {
      name: "Memuat...",
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("renders icons as decorative", () => {
    const { container } = render(
      <TextAction leadingIcon={<Pencil data-testid="pencil-icon" />}>
        Ubah
      </TextAction>,
    );

    expect(screen.getByTestId("pencil-icon")).toBeInTheDocument();

    expect(container.querySelector(".stip-text-action__icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("exposes variant and size", () => {
    render(
      <TextAction variant="destructive" size="sm">
        Hapus filter
      </TextAction>,
    );

    const button = screen.getByRole("button", {
      name: "Hapus filter",
    });

    expect(button).toHaveAttribute("data-variant", "destructive");

    expect(button).toHaveAttribute("data-size", "sm");
  });
});
