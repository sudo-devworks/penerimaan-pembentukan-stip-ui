import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { StatGroup, StatItem } from "./StatGroup";

describe("StatGroup", () => {
  it("renders statistic content", () => {
    render(
      <StatGroup>
        <StatItem
          description="Peserta aktif"
          label="Total peserta"
          value="128"
        />
      </StatGroup>,
    );

    expect(screen.getByText("Total peserta")).toBeInTheDocument();
    expect(screen.getByText("128")).toBeInTheDocument();
    expect(screen.getByText("Peserta aktif")).toBeInTheDocument();
  });

  it("renders trend and icon content", () => {
    render(
      <StatGroup>
        <StatItem
          icon={<span>Icon</span>}
          label="Lulus administrasi"
          trend="+12%"
          value="94"
        />
      </StatGroup>,
    );

    expect(screen.getByText("+12%")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("applies the column modifier", () => {
    const { container } = render(
      <StatGroup columns={4}>
        <StatItem label="Total" value="10" />
      </StatGroup>,
    );

    expect(container.firstChild).toHaveClass("stat-group--columns-4");
  });
});
