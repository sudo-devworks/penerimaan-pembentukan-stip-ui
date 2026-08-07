import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../actions/button";
import { ActivityItem } from "./activity-item";
import { FileItem } from "./file-item";
import { NotificationItem } from "./notification-item";
import { TimelineEvent } from "./timeline-event";

describe("Composite content item composition", () => {
  it("composes activity, timeline, notification, and file items", () => {
    render(
      <main>
        <ActivityItem
          description="Data diperbarui."
          title="Aktivitas terbaru"
        />

        <ol>
          <TimelineEvent
            description="Tahapan selesai."
            last
            state="completed"
            title="Pendaftaran"
          />
        </ol>

        <NotificationItem
          actions={<Button variant="text">Buka</Button>}
          description="Terdapat informasi baru."
          title="Notifikasi baru"
          unread
        />

        <FileItem
          actions={<Button variant="outline">Unduh</Button>}
          name="dokumen.pdf"
          state="success"
        />
      </main>,
    );

    expect(screen.getByText("Aktivitas terbaru")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByLabelText("Belum dibaca")).toBeInTheDocument();
    expect(screen.getByText("dokumen.pdf")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Unduh" })).toBeInTheDocument();
  });
});
