import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../button";
import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("renders its child actions", () => {
    render(
      <ButtonGroup>
        <Button>Kembali</Button>
        <Button>Simpan Perubahan</Button>
      </ButtonGroup>,
    );

    expect(
      screen.getByRole("button", {
        name: "Kembali",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Simpan Perubahan",
      }),
    ).toBeInTheDocument();
  });

  it("uses group semantics when named", () => {
    render(
      <ButtonGroup aria-label="Aksi formulir">
        <Button>Simpan</Button>
      </ButtonGroup>,
    );

    expect(
      screen.getByRole("group", {
        name: "Aksi formulir",
      }),
    ).toBeInTheDocument();
  });

  it("does not add an unnamed group role", () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Simpan</Button>
      </ButtonGroup>,
    );

    expect(container.querySelector(".stip-button-group")).not.toHaveAttribute(
      "role",
    );
  });

  it("exposes layout contracts", () => {
    render(
      <ButtonGroup
        aria-label="Aksi"
        direction="vertical"
        align="stretch"
        stackOnMobile
        stretchOnMobile
      >
        <Button>Simpan</Button>
      </ButtonGroup>,
    );

    const group = screen.getByRole("group", {
      name: "Aksi",
    });

    expect(group).toHaveAttribute("data-direction", "vertical");
    expect(group).toHaveAttribute("data-align", "stretch");
    expect(group).toHaveAttribute("data-stack-mobile", "true");
    expect(group).toHaveAttribute("data-stretch-mobile", "true");
  });

  it("merges a custom class name", () => {
    render(
      <ButtonGroup aria-label="Aksi" className="dialog-footer">
        <Button>Simpan</Button>
      </ButtonGroup>,
    );

    expect(
      screen.getByRole("group", {
        name: "Aksi",
      }),
    ).toHaveClass("stip-button-group", "dialog-footer");
  });
});
