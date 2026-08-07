import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FileItem } from "./FileItem";

describe("FileItem", () => {
  it("renders file information", () => {
    render(
      <FileItem
        description="Dokumen PDF"
        metadata={<span>1,2 MB</span>}
        name="ijazah.pdf"
      />,
    );

    expect(screen.getByText("ijazah.pdf")).toBeInTheDocument();
    expect(screen.getByText("Dokumen PDF")).toBeInTheDocument();
    expect(screen.getByText("1,2 MB")).toBeInTheDocument();
  });

  it("renders status, progress, and actions", () => {
    render(
      <FileItem
        actions={<button>Hapus</button>}
        name="dokumen.pdf"
        progress={<span>50%</span>}
        status={<span>Mengunggah</span>}
      />,
    );

    expect(screen.getByText("Mengunggah")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hapus" })).toBeInTheDocument();
  });

  it("applies state modifier", () => {
    render(<FileItem data-testid="file" name="dokumen.pdf" state="error" />);

    expect(screen.getByTestId("file")).toHaveClass("file-item--error");
  });
});
