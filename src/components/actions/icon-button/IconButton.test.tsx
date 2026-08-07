import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Bell, RefreshCw } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import { IconButton } from "./IconButton";
import type { IconButtonVariant } from "./IconButton.types";

describe("IconButton", () => {
  it("renders a native button with an accessible name", () => {
    render(<IconButton icon={<Bell />} aria-label="Buka notifikasi" />);

    const button = screen.getByRole("button", {
      name: "Buka notifikasi",
    });

    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
  });

  it("renders the icon as decorative content", () => {
    const { container } = render(
      <IconButton
        icon={<Bell data-testid="bell-icon" />}
        aria-label="Buka notifikasi"
      />,
    );

    expect(screen.getByTestId("bell-icon")).toBeInTheDocument();

    expect(container.querySelector(".stip-icon-button__icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("calls the click handler", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        onClick={handleClick}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Buka notifikasi",
      }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not run while disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        disabled
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole("button", {
      name: "Buka notifikasi",
    });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses the loading label as accessible name", () => {
    render(
      <IconButton
        icon={<RefreshCw data-testid="refresh-icon" />}
        aria-label="Segarkan data"
        loading
        loadingLabel="Menyegarkan data"
      />,
    );

    const button = screen.getByRole("button", {
      name: "Menyegarkan data",
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");

    expect(screen.queryByTestId("refresh-icon")).not.toBeInTheDocument();
  });

  it("keeps the original name when loadingLabel is omitted", () => {
    render(
      <IconButton icon={<RefreshCw />} aria-label="Segarkan data" loading />,
    );

    expect(
      screen.getByRole("button", {
        name: "Segarkan data",
      }),
    ).toBeDisabled();
  });

  it("renders a decorative spinner while loading", () => {
    const { container } = render(
      <IconButton icon={<RefreshCw />} aria-label="Segarkan data" loading />,
    );

    expect(
      container.querySelector(".stip-icon-button__spinner"),
    ).toHaveAttribute("aria-hidden", "true");
  });

  it.each<IconButtonVariant>([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "destructive",
  ])("exposes the %s variant contract", (variant) => {
    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        variant={variant}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Buka notifikasi",
      }),
    ).toHaveAttribute("data-variant", variant);
  });

  it("uses ghost as the default variant", () => {
    render(<IconButton icon={<Bell />} aria-label="Buka notifikasi" />);

    expect(
      screen.getByRole("button", {
        name: "Buka notifikasi",
      }),
    ).toHaveAttribute("data-variant", "ghost");
  });

  it("exposes size and shape contracts", () => {
    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        size="lg"
        shape="circular"
      />,
    );

    const button = screen.getByRole("button", {
      name: "Buka notifikasi",
    });

    expect(button).toHaveAttribute("data-size", "lg");
    expect(button).toHaveAttribute("data-shape", "circular");
  });

  it("supports the submit type", () => {
    render(
      <IconButton
        icon={<RefreshCw />}
        aria-label="Kirim formulir"
        type="submit"
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Kirim formulir",
      }),
    ).toHaveAttribute("type", "submit");
  });

  it("merges a custom class name", () => {
    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        className="toolbar-action"
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Buka notifikasi",
      }),
    ).toHaveClass("stip-icon-button", "toolbar-action");
  });

  it("forwards the button ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton ref={ref} icon={<Bell />} aria-label="Buka notifikasi" />,
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <IconButton
        icon={<Bell />}
        aria-label="Buka notifikasi"
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole("button", {
      name: "Buka notifikasi",
    });

    button.focus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
