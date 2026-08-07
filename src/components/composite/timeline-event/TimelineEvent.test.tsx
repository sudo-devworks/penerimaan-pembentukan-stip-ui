import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TimelineEvent } from "./TimelineEvent";

describe("TimelineEvent", () => {
  it("renders semantic list item content", () => {
    render(
      <ol>
        <TimelineEvent
          description="Tahapan telah selesai."
          timestamp="5 Agustus 2026"
          title="Pendaftaran"
        />
      </ol>,
    );

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("Pendaftaran")).toBeInTheDocument();
    expect(screen.getByText("Tahapan telah selesai.")).toBeInTheDocument();
  });

  it("applies state and last modifiers", () => {
    render(
      <ol>
        <TimelineEvent
          data-testid="event"
          last
          state="completed"
          title="Selesai"
        />
      </ol>,
    );

    expect(screen.getByTestId("event")).toHaveClass(
      "timeline-event--completed",
      "timeline-event--last",
    );
  });
});
