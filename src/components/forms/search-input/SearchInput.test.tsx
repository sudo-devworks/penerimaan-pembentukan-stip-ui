import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders a native search input", () => {
    render(<SearchInput aria-label="Cari peserta" />);

    expect(
      screen.getByRole("searchbox", {
        name: "Cari peserta",
      }),
    ).toHaveAttribute("type", "search");
  });

  it("supports user typing", async () => {
    const user = userEvent.setup();

    render(<SearchInput aria-label="Cari peserta" />);

    const input = screen.getByRole("searchbox");

    await user.type(input, "Israa");

    expect(input).toHaveValue("Israa");
  });

  it("shows the clear action when a value exists", async () => {
    const user = userEvent.setup();

    render(<SearchInput aria-label="Cari peserta" />);

    await user.type(screen.getByRole("searchbox"), "Nautika");

    expect(
      screen.getByRole("button", {
        name: "Hapus pencarian",
      }),
    ).toBeInTheDocument();
  });

  it("clears an uncontrolled value", async () => {
    const user = userEvent.setup();

    render(<SearchInput aria-label="Cari peserta" defaultValue="Nautika" />);

    await user.click(
      screen.getByRole("button", {
        name: "Hapus pencarian",
      }),
    );

    expect(screen.getByRole("searchbox")).toHaveValue("");
  });

  it("calls onClear", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();

    render(
      <SearchInput
        aria-label="Cari peserta"
        defaultValue="Nautika"
        onClear={onClear}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Hapus pencarian",
      }),
    );

    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("calls onValueChange", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <SearchInput aria-label="Cari peserta" onValueChange={onValueChange} />,
    );

    await user.type(screen.getByRole("searchbox"), "A");

    expect(onValueChange).toHaveBeenCalledWith("A", expect.any(Object));
  });

  it("shows a loading status", () => {
    render(<SearchInput aria-label="Cari peserta" loading />);

    expect(
      screen.getByRole("status", {
        name: "Pencarian sedang diproses",
      }),
    ).toBeInTheDocument();
  });

  it("hides the clear action while loading", () => {
    render(
      <SearchInput aria-label="Cari peserta" defaultValue="Nautika" loading />,
    );

    expect(
      screen.queryByRole("button", {
        name: "Hapus pencarian",
      }),
    ).not.toBeInTheDocument();
  });

  it("does not show the clear action when read-only", () => {
    render(<SearchInput aria-label="Cari peserta" readOnly value="Nautika" />);

    expect(
      screen.queryByRole("button", {
        name: "Hapus pencarian",
      }),
    ).not.toBeInTheDocument();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(<SearchInput ref={ref} aria-label="Cari peserta" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
