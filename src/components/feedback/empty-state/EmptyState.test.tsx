import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button, TextAction } from "../../actions";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(
      <EmptyState
        title="Belum ada dokumen"
        description="Dokumen yang diunggah akan tampil di sini."
      />,
    );

    expect(screen.getByText("Belum ada dokumen")).toBeInTheDocument();

    expect(
      screen.getByText("Dokumen yang diunggah akan tampil di sini."),
    ).toBeInTheDocument();
  });

  it("renders primary and secondary actions", () => {
    render(
      <EmptyState
        title="Belum ada dokumen"
        primaryAction={<Button>Unggah dokumen</Button>}
        secondaryAction={<TextAction>Lihat panduan</TextAction>}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Unggah dokumen",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Lihat panduan",
      }),
    ).toBeInTheDocument();
  });

  it("supports compact variant", () => {
    const { container } = render(
      <EmptyState variant="compact" title="Tidak ada hasil" />,
    );

    expect(container.firstChild).toHaveAttribute("data-variant", "compact");
  });

  it("does not announce static content by default", () => {
    render(<EmptyState title="Belum ada kegiatan aktif" />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(<EmptyState ref={ref} title="Belum ada data" />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
