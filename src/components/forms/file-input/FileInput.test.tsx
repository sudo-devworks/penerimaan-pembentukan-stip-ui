import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { FileInput } from "./FileInput";

describe("FileInput", () => {
  it("renders a native file input", () => {
    render(<FileInput aria-label="Dokumen Identitas" />);

    expect(screen.getByLabelText("Dokumen Identitas")).toHaveAttribute(
      "type",
      "file",
    );
  });

  it("associates its visible trigger", () => {
    render(<FileInput id="document" label="Pilih dokumen" />);

    expect(screen.getByText("Pilih dokumen").closest("label")).toHaveAttribute(
      "for",
      "document",
    );
  });

  it("supports accepted file types", () => {
    render(<FileInput accept=".pdf,.jpg,.png" aria-label="Dokumen" />);

    expect(screen.getByLabelText("Dokumen")).toHaveAttribute(
      "accept",
      ".pdf,.jpg,.png",
    );
  });

  it("shows the selected file name", async () => {
    const user = userEvent.setup();

    render(<FileInput aria-label="Dokumen" />);

    const file = new File(["document"], "identitas.pdf", {
      type: "application/pdf",
    });

    await user.upload(screen.getByLabelText("Dokumen"), file);

    expect(screen.getByText("identitas.pdf")).toBeInTheDocument();
  });

  it("shows selected file count for multiple files", async () => {
    const user = userEvent.setup();

    render(<FileInput aria-label="Dokumen" multiple />);

    const files = [
      new File(["one"], "satu.pdf", {
        type: "application/pdf",
      }),
      new File(["two"], "dua.pdf", {
        type: "application/pdf",
      }),
    ];

    await user.upload(screen.getByLabelText("Dokumen"), files);

    expect(screen.getByText("2 file dipilih")).toBeInTheDocument();
  });

  it("calls onFilesChange", async () => {
    const user = userEvent.setup();
    const onFilesChange = vi.fn();

    render(<FileInput aria-label="Dokumen" onFilesChange={onFilesChange} />);

    const file = new File(["document"], "identitas.pdf", {
      type: "application/pdf",
    });

    await user.upload(screen.getByLabelText("Dokumen"), file);

    expect(onFilesChange).toHaveBeenCalled();
  });

  it("supports disabled state", () => {
    render(<FileInput aria-label="Dokumen" disabled />);

    expect(screen.getByLabelText("Dokumen")).toBeDisabled();
  });

  it("supports invalid state", () => {
    render(<FileInput aria-label="Dokumen" invalid />);

    expect(screen.getByLabelText("Dokumen")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(<FileInput ref={ref} aria-label="Dokumen" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
