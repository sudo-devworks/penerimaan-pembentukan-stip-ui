import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OverlayTree } from "./OverlayTree";

describe("OverlayTree", () => {
  it("renders overlay consumers", () => {
    render(
      <OverlayTree>
        <div>Overlay tree consumer</div>
      </OverlayTree>,
    );

    expect(screen.getByText("Overlay tree consumer")).toBeInTheDocument();
  });
});
