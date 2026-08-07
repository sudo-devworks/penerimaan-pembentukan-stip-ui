import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ActivityItem } from "./ActivityItem";

describe("ActivityItem", () => {
  it("renders activity content", () => {
    render(
      <ActivityItem
        description="Data peserta berhasil diperbarui."
        metadata={<span>Portal Internal</span>}
        timestamp="10 menit lalu"
        title="Perubahan data"
      />,
    );

    expect(screen.getByText("Perubahan data")).toBeInTheDocument();
    expect(
      screen.getByText("Data peserta berhasil diperbarui."),
    ).toBeInTheDocument();
    expect(screen.getByText("Portal Internal")).toBeInTheDocument();
    expect(screen.getByText("10 menit lalu")).toBeInTheDocument();
  });

  it("renders icon and actions", () => {
    render(
      <ActivityItem
        actions={<button>Lihat Detail</button>}
        icon={<span>Icon</span>}
        title="Aktivitas"
      />,
    );

    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Lihat Detail" }),
    ).toBeInTheDocument();
  });
});
