import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NotificationItem } from "./NotificationItem";

describe("NotificationItem", () => {
  it("renders notification content", () => {
    render(
      <NotificationItem
        description="Data berhasil diverifikasi."
        timestamp="Baru saja"
        title="Status diperbarui"
      />,
    );

    expect(screen.getByText("Status diperbarui")).toBeInTheDocument();
    expect(screen.getByText("Data berhasil diverifikasi.")).toBeInTheDocument();
    expect(screen.getByText("Baru saja")).toBeInTheDocument();
  });

  it("renders unread state accessibly", () => {
    render(
      <NotificationItem
        data-testid="notification"
        title="Notifikasi baru"
        unread
      />,
    );

    expect(screen.getByLabelText("Belum dibaca")).toBeInTheDocument();
    expect(screen.getByTestId("notification")).toHaveClass(
      "notification-item--unread",
    );
  });

  it("applies variant modifier", () => {
    render(
      <NotificationItem
        data-testid="notification"
        title="Peringatan"
        variant="warning"
      />,
    );

    expect(screen.getByTestId("notification")).toHaveClass(
      "notification-item--warning",
    );
  });
});
