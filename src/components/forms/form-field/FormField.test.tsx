import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { FormField } from "./FormField";

describe("FormField", () => {
  it("renders its child control", () => {
    render(
      <FormField>
        <input aria-label="Cari peserta" type="search" />
      </FormField>,
    );

    expect(
      screen.getByRole("searchbox", {
        name: "Cari peserta",
      }),
    ).toBeInTheDocument();
  });

  it("associates its native label with the control", () => {
    render(
      <FormField htmlFor="email" label="Alamat Email">
        <input id="email" type="email" />
      </FormField>,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Alamat Email",
      }),
    ).toBeInTheDocument();
  });

  it("renders helper text with a generated id", () => {
    render(
      <FormField
        helperText="Gunakan email aktif."
        htmlFor="email"
        label="Alamat Email"
      >
        <input aria-describedby="email-helper" id="email" type="email" />
      </FormField>,
    );

    expect(screen.getByText("Gunakan email aktif.")).toHaveAttribute(
      "id",
      "email-helper",
    );
  });

  it("renders a requirement message with a generated id", () => {
    render(
      <FormField
        htmlFor="password"
        label="Password"
        requirementMessage="Gunakan minimal 8 karakter."
      >
        <input
          aria-describedby="password-requirement"
          id="password"
          type="password"
        />
      </FormField>,
    );

    expect(screen.getByText("Gunakan minimal 8 karakter.")).toHaveAttribute(
      "id",
      "password-requirement",
    );
  });

  it("only renders the error message when invalid", () => {
    const { rerender } = render(
      <FormField
        errorMessage="Format email tidak valid."
        htmlFor="email"
        label="Alamat Email"
      >
        <input id="email" type="email" />
      </FormField>,
    );

    expect(
      screen.queryByText("Format email tidak valid."),
    ).not.toBeInTheDocument();

    rerender(
      <FormField
        errorMessage="Format email tidak valid."
        htmlFor="email"
        invalid
        label="Alamat Email"
      >
        <input aria-invalid="true" id="email" type="email" />
      </FormField>,
    );

    expect(screen.getByText("Format email tidak valid.")).toHaveAttribute(
      "id",
      "email-error",
    );
  });

  it("exposes invalid state on the field wrapper", () => {
    render(
      <FormField data-testid="field" invalid>
        <input aria-label="Field" />
      </FormField>,
    );

    expect(screen.getByTestId("field")).toHaveAttribute("data-invalid", "true");
  });

  it("exposes disabled state on the field wrapper", () => {
    render(
      <FormField data-testid="field" disabled>
        <input aria-label="Field" disabled />
      </FormField>,
    );

    expect(screen.getByTestId("field")).toHaveAttribute(
      "data-disabled",
      "true",
    );
  });

  it("renders a required indicator", () => {
    render(
      <FormField htmlFor="full-name" label="Nama Lengkap" required>
        <input id="full-name" required />
      </FormField>,
    );

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders an optional indicator", () => {
    render(
      <FormField htmlFor="note" label="Catatan" optional>
        <textarea id="note" />
      </FormField>,
    );

    expect(screen.getByText("Opsional")).toBeInTheDocument();
  });

  it("renders character count with a generated id", () => {
    render(
      <FormField characterCount="120/500" htmlFor="address" label="Alamat">
        <textarea id="address" />
      </FormField>,
    );

    expect(screen.getByText("120/500")).toHaveAttribute("id", "address-count");
  });

  it("supports custom message ids", () => {
    render(
      <FormField
        errorMessage="Data salah."
        errorMessageId="custom-error"
        helperText="Informasi bantuan."
        helperTextId="custom-helper"
        invalid
      >
        <input aria-label="Field" />
      </FormField>,
    );

    expect(screen.getByText("Informasi bantuan.")).toHaveAttribute(
      "id",
      "custom-helper",
    );

    expect(screen.getByText("Data salah.")).toHaveAttribute(
      "id",
      "custom-error",
    );
  });

  it("prioritizes required when required and optional are combined", () => {
    const warnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);

    render(
      <FormField htmlFor="field" label="Field" optional required>
        <input id="field" />
      </FormField>,
    );

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.queryByText("Opsional")).not.toBeInTheDocument();

    warnSpy.mockRestore();
  });

  it("forwards its ref", () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <FormField ref={ref}>
        <input aria-label="Field" />
      </FormField>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("supports long content", () => {
    render(
      <FormField
        errorMessage="Masukkan alamat email aktif dengan format nama@domain.com agar notifikasi proses penerimaan dapat dikirimkan dengan benar."
        helperText="Alamat email ini digunakan untuk seluruh komunikasi selama proses penerimaan."
        htmlFor="long-email"
        invalid
        label="Alamat Email Peserta yang Digunakan untuk Menerima Informasi Pendaftaran"
      >
        <input aria-invalid="true" id="long-email" type="email" />
      </FormField>,
    );

    expect(
      screen.getByText(
        "Alamat Email Peserta yang Digunakan untuk Menerima Informasi Pendaftaran",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Masukkan alamat email aktif dengan format nama@domain.com agar notifikasi proses penerimaan dapat dikirimkan dengan benar.",
      ),
    ).toBeInTheDocument();
  });
});
