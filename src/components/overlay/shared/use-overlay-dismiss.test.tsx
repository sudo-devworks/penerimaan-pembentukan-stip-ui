import { useState } from "react";
import { useFloating } from "@floating-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { mapFloatingOpenChangeReason } from "./overlay-dismiss.utils";
import { useOverlayDismiss } from "./use-overlay-dismiss";

const DismissFixture = ({
  escapeKey = true,
  outsidePress = true,
}: {
  escapeKey?: boolean;
  outsidePress?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [lastReason, setLastReason] = useState("none");

  const {
    context,
    refs: { setReference, setFloating },
  } = useFloating({
    open: isOpen,

    onOpenChange(nextOpen, _event, reason) {
      setIsOpen(nextOpen);

      setLastReason(mapFloatingOpenChangeReason(reason));
    },
  });

  const { getReferenceProps, getFloatingProps } = useOverlayDismiss(context, {
    escapeKey,
    outsidePress,
  });

  return (
    <div>
      <button
        ref={setReference}
        type="button"
        {...getReferenceProps({
          onClick: () => {
            setIsOpen(true);
          },
        })}
      >
        Open overlay
      </button>

      <button type="button">Outside action</button>

      <output aria-label="Last reason">{lastReason}</output>

      {isOpen ? (
        <div
          ref={setFloating}
          role="dialog"
          aria-label="Example overlay"
          {...getFloatingProps()}
        >
          Overlay content
        </div>
      ) : null}
    </div>
  );
};

describe("useOverlayDismiss", () => {
  it("dismisses with Escape and reports the reason", async () => {
    const user = userEvent.setup();

    render(<DismissFixture />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Example overlay",
      }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(
      screen.queryByRole("dialog", {
        name: "Example overlay",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("status", {
        name: "Last reason",
      }),
    ).toHaveTextContent("escape-key");
  });

  it("dismisses through outside pointer interaction", async () => {
    const user = userEvent.setup();

    render(<DismissFixture />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Outside action",
      }),
    );

    expect(
      screen.queryByRole("dialog", {
        name: "Example overlay",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("status", {
        name: "Last reason",
      }),
    ).toHaveTextContent("pointer-outside");
  });

  it("can disable Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<DismissFixture escapeKey={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    await user.keyboard("{Escape}");

    expect(
      screen.getByRole("dialog", {
        name: "Example overlay",
      }),
    ).toBeInTheDocument();
  });

  it("can disable outside pointer dismissal", async () => {
    const user = userEvent.setup();

    render(<DismissFixture outsidePress={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Outside action",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Example overlay",
      }),
    ).toBeInTheDocument();
  });
});

describe("mapFloatingOpenChangeReason", () => {
  it("maps Floating UI reasons to the overlay contract", () => {
    expect(mapFloatingOpenChangeReason("escape-key")).toBe("escape-key");

    expect(mapFloatingOpenChangeReason("outside-press")).toBe(
      "pointer-outside",
    );

    expect(mapFloatingOpenChangeReason("reference-press")).toBe(
      "trigger-toggle",
    );

    expect(mapFloatingOpenChangeReason()).toBe("programmatic");
  });
});
