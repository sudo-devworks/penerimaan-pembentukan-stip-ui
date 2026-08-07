import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../actions/button";
import { DescriptionList, DescriptionListItem } from "./description-list";
import { DetailSummary } from "./detail-summary";
import { StatGroup, StatItem } from "./stat-group";

describe("Composite summary composition", () => {
  it("composes statistics and participant details", () => {
    render(
      <main>
        <StatGroup columns={2}>
          <StatItem label="Total peserta" value="128" />
          <StatItem label="Lulus administrasi" value="94" />
        </StatGroup>

        <DetailSummary
          actions={<Button variant="outline">Edit Data</Button>}
          title="Informasi Peserta"
        >
          <DescriptionList columns={2}>
            <DescriptionListItem term="Nama">Budi Santoso</DescriptionListItem>

            <DescriptionListItem term="Program">Nautika</DescriptionListItem>
          </DescriptionList>
        </DetailSummary>
      </main>,
    );

    expect(screen.getByText("Total peserta")).toBeInTheDocument();
    expect(screen.getByText("128")).toBeInTheDocument();

    expect(
      screen.getByRole("region", {
        name: "Informasi Peserta",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Budi Santoso")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Edit Data",
      }),
    ).toBeInTheDocument();
  });
});
