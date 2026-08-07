import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DescriptionList, DescriptionListItem } from "./DescriptionList";

describe("DescriptionList", () => {
  it("renders semantic description list content", () => {
    const { container } = render(
      <DescriptionList>
        <DescriptionListItem term="Nama">Budi Santoso</DescriptionListItem>
      </DescriptionList>,
    );

    expect(container.querySelector("dl")).toBeInTheDocument();
    expect(container.querySelector("dt")).toHaveTextContent("Nama");
    expect(container.querySelector("dd")).toHaveTextContent("Budi Santoso");
  });

  it("renders item actions", () => {
    render(
      <DescriptionList>
        <DescriptionListItem
          actions={<button>Salin</button>}
          term="Nomor Pendaftaran"
        >
          STIP-2026-000128
        </DescriptionListItem>
      </DescriptionList>,
    );

    expect(screen.getByRole("button", { name: "Salin" })).toBeInTheDocument();
  });

  it("applies column and divided modifiers", () => {
    const { container } = render(
      <DescriptionList columns={2} divided>
        <DescriptionListItem term="Program">Nautika</DescriptionListItem>
      </DescriptionList>,
    );

    expect(container.querySelector("dl")).toHaveClass(
      "description-list--columns-2",
      "description-list--divided",
    );
  });
});
