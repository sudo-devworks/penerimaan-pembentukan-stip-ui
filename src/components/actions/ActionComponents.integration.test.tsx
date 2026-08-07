import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Bell, Download } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import {
  ActionLink,
  Button,
  ButtonGroup,
  DropdownAction,
  IconButton,
  TextAction,
} from "./index";

describe("Action Components integration", () => {
  it("exports and renders the complete shared action system", () => {
    render(
      <div>
        <Button>Daftar Sekarang</Button>

        <IconButton icon={<Bell />} aria-label="Buka notifikasi" />

        <ButtonGroup aria-label="Aksi formulir">
          <Button variant="secondary">Kembali</Button>

          <Button>Simpan Perubahan</Button>
        </ButtonGroup>

        <ActionLink href="/program">Lihat Program</ActionLink>

        <TextAction>Lihat detail</TextAction>

        <DropdownAction
          label="Unduh"
          leadingIcon={<Download />}
          items={[
            {
              id: "pdf",
              label: "Unduh PDF",
              onSelect: vi.fn(),
            },
          ]}
        />
      </div>,
    );

    expect(
      screen.getByRole("button", {
        name: "Daftar Sekarang",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Buka notifikasi",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("group", {
        name: "Aksi formulir",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Lihat Program",
      }),
    ).toHaveAttribute("href", "/program");

    expect(
      screen.getByRole("button", {
        name: "Lihat detail",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Unduh",
      }),
    ).toHaveAttribute("aria-haspopup", "menu");
  });

  it("keeps button action and navigation semantics separate", () => {
    render(
      <>
        <Button>Simpan Perubahan</Button>

        <ActionLink href="/pembayaran">Lihat Pembayaran</ActionLink>
      </>,
    );

    expect(
      screen.getByRole("button", {
        name: "Simpan Perubahan",
      }).tagName,
    ).toBe("BUTTON");

    expect(
      screen.getByRole("link", {
        name: "Lihat Pembayaran",
      }).tagName,
    ).toBe("A");
  });

  it("prevents repeated asynchronous interaction", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button loading loadingLabel="Menyimpan..." onClick={handleClick}>
        Simpan Perubahan
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: /menyimpan/i,
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
