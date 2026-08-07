import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldGroup } from "./FieldGroup";

describe("FieldGroup", () => {
  it("renders its children", () => {
    render(
      <FieldGroup>
        <div>Field satu</div>
      </FieldGroup>,
    );

    expect(screen.getByText("Field satu")).toBeInTheDocument();
  });

  it("exposes its column configuration", () => {
    render(
      <FieldGroup columns={2} data-testid="group">
        <div>Field</div>
      </FieldGroup>,
    );

    expect(screen.getByTestId("group")).toHaveAttribute("data-columns", "2");
  });

  it("exposes mobile column configuration", () => {
    render(
      <FieldGroup data-testid="group" mobileColumns={2}>
        <div>Field</div>
      </FieldGroup>,
    );

    expect(screen.getByTestId("group")).toHaveAttribute(
      "data-mobile-columns",
      "2",
    );
  });
});
