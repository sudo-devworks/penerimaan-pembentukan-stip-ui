import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HelperText } from "./HelperText";

describe("HelperText", () => {
  it("renders helper content", () => {
    render(<HelperText id="email-helper">Gunakan email aktif.</HelperText>);

    expect(screen.getByText("Gunakan email aktif.")).toHaveAttribute(
      "id",
      "email-helper",
    );
  });

  it("exposes its message type", () => {
    render(<HelperText>Informasi bantuan.</HelperText>);

    expect(screen.getByText("Informasi bantuan.")).toHaveAttribute(
      "data-message-type",
      "helper",
    );
  });
});
