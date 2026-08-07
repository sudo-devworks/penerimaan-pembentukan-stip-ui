import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Download, FileText } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import { DropdownAction } from "./DropdownAction";

const createItems = (firstAction = vi.fn(), secondAction = vi.fn()) => [
  {
    id: "pdf",
    label: "Unduh PDF",
    icon: <FileText />,
    onSelect: firstAction,
  },
  {
    id: "excel",
    label: "Unduh Excel",
    onSelect: secondAction,
  },
];

describe("DropdownAction", () => {
  it("renders a native trigger button", () => {
    render(<DropdownAction label="Unduh" items={createItems()} />);

    const trigger = screen.getByRole("button", {
      name: "Unduh",
    });

    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the menu and exposes menu semantics", async () => {
    const user = userEvent.setup();

    render(
      <DropdownAction
        label="Unduh"
        menuLabel="Pilihan format"
        items={createItems()}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    );

    expect(
      screen.getByRole("menu", {
        name: "Pilihan format",
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
  });

  it("runs an action and closes the menu", async () => {
    const user = userEvent.setup();
    const handlePdf = vi.fn();

    render(<DropdownAction label="Unduh" items={createItems(handlePdf)} />);

    await user.click(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    );

    await user.click(
      screen.getByRole("menuitem", {
        name: "Unduh PDF",
      }),
    );

    expect(handlePdf).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: "Unduh",
        }),
      ).toHaveFocus();
    });
  });

  it("opens with ArrowDown and focuses the first item", async () => {
    const user = userEvent.setup();

    render(<DropdownAction label="Unduh" items={createItems()} />);

    const trigger = screen.getByRole("button", {
      name: "Unduh",
    });

    trigger.focus();

    await user.keyboard("{ArrowDown}");

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Unduh PDF",
        }),
      ).toHaveFocus();
    });
  });

  it("opens with ArrowUp and focuses the last item", async () => {
    const user = userEvent.setup();

    render(<DropdownAction label="Unduh" items={createItems()} />);

    const trigger = screen.getByRole("button", {
      name: "Unduh",
    });

    trigger.focus();

    await user.keyboard("{ArrowUp}");

    await waitFor(() => {
      expect(
        screen.getByRole("menuitem", {
          name: "Unduh Excel",
        }),
      ).toHaveFocus();
    });
  });

  it("moves focus with arrow keys", async () => {
    const user = userEvent.setup();

    render(<DropdownAction label="Unduh" items={createItems()} />);

    await user.click(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    );

    const menu = screen.getByRole("menu");

    const pdfItem = within(menu).getByRole("menuitem", {
      name: "Unduh PDF",
    });

    const excelItem = within(menu).getByRole("menuitem", {
      name: "Unduh Excel",
    });

    /*
     * Tunggu requestAnimationFrame dari openMenu()
     * selesai memfokuskan item pertama.
     */
    await waitFor(() => {
      expect(pdfItem).toHaveFocus();
    });

    await user.keyboard("{ArrowDown}");

    expect(excelItem).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(pdfItem).toHaveFocus();

    await user.keyboard("{ArrowUp}");

    expect(excelItem).toHaveFocus();
  });

  it("closes with Escape and returns focus", async () => {
    const user = userEvent.setup();

    render(<DropdownAction label="Unduh" items={createItems()} />);

    const trigger = screen.getByRole("button", {
      name: "Unduh",
    });

    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    expect(trigger).toHaveFocus();
  });

  it("skips disabled items during keyboard navigation", async () => {
    const user = userEvent.setup();

    render(
      <DropdownAction
        label="Unduh"
        items={[
          {
            id: "pdf",
            label: "Unduh PDF",
            onSelect: vi.fn(),
          },
          {
            id: "excel",
            label: "Unduh Excel",
            disabled: true,
            onSelect: vi.fn(),
          },
          {
            id: "csv",
            label: "Unduh CSV",
            onSelect: vi.fn(),
          },
        ]}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    );

    const pdfItem = screen.getByRole("menuitem", {
      name: "Unduh PDF",
    });

    const csvItem = screen.getByRole("menuitem", {
      name: "Unduh CSV",
    });

    /*
     * Pastikan fokus awal sudah selesai dipindahkan
     * sebelum mengirim ArrowDown.
     */
    await waitFor(() => {
      expect(pdfItem).toHaveFocus();
    });

    await user.keyboard("{ArrowDown}");

    expect(csvItem).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(pdfItem).toHaveFocus();
  });

  it("renders separators", async () => {
    const user = userEvent.setup();

    render(
      <DropdownAction
        label="Tindakan"
        items={[
          {
            id: "edit",
            label: "Ubah",
            onSelect: vi.fn(),
          },
          {
            id: "separator",
            type: "separator",
          },
          {
            id: "delete",
            label: "Hapus",
            destructive: true,
            onSelect: vi.fn(),
          },
        ]}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Tindakan",
      }),
    );

    expect(screen.getByRole("separator")).toBeInTheDocument();

    expect(
      screen.getByRole("menuitem", {
        name: "Hapus",
      }),
    ).toHaveAttribute("data-destructive", "true");
  });

  it("renders native navigation items", async () => {
    const user = userEvent.setup();

    render(
      <DropdownAction
        label="Dokumen"
        items={[
          {
            id: "open",
            type: "link",
            label: "Buka dokumen",
            href: "/dokumen",
          },
        ]}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Dokumen",
      }),
    );

    const link = screen.getByRole("menuitem", {
      name: "Buka dokumen",
    });

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/dokumen");
  });

  it("disables the trigger", () => {
    render(<DropdownAction label="Unduh" disabled items={createItems()} />);

    expect(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    ).toBeDisabled();
  });

  it("renders trigger icons as decorative", () => {
    const { container } = render(
      <DropdownAction
        label="Unduh"
        leadingIcon={<Download data-testid="download-icon" />}
        items={createItems()}
      />,
    );

    expect(screen.getByTestId("download-icon")).toBeInTheDocument();

    expect(
      container.querySelector(".stip-button__icon--leading"),
    ).toHaveAttribute("aria-hidden", "true");
  });
});
