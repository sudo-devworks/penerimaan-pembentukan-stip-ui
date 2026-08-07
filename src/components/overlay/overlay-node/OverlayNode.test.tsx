import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OverlayNode } from "./OverlayNode";

describe("OverlayNode", () => {
  it("provides a floating node identifier", () => {
    render(
      <OverlayNode>
        {(nodeId) => <div data-testid="node">{nodeId}</div>}
      </OverlayNode>,
    );

    expect(screen.getByTestId("node")).not.toHaveTextContent("");
  });

  it("supports nested node registration", () => {
    render(
      <OverlayNode>
        {(parentNodeId) => (
          <div>
            <span data-testid="parent-node">{parentNodeId}</span>

            <OverlayNode>
              {(childNodeId) => (
                <span data-testid="child-node">{childNodeId}</span>
              )}
            </OverlayNode>
          </div>
        )}
      </OverlayNode>,
    );

    expect(screen.getByTestId("parent-node").textContent).not.toBe(
      screen.getByTestId("child-node").textContent,
    );
  });
});
