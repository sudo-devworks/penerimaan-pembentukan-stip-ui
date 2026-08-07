import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RequirementMessage } from "./RequirementMessage";

describe("RequirementMessage", () => {
  it("renders a requirement message", () => {
    render(
      <RequirementMessage id="password-requirement">
        Gunakan minimal 8 karakter.
      </RequirementMessage>,
    );

    expect(screen.getByText("Gunakan minimal 8 karakter.")).toHaveAttribute(
      "id",
      "password-requirement",
    );
  });

  it("does not use an alert role by default", () => {
    render(
      <RequirementMessage>Gunakan minimal 8 karakter.</RequirementMessage>,
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
