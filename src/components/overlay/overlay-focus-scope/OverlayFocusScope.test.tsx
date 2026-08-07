import { useRef, useState } from "react";
import { useFloating } from "@floating-ui/react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { OverlayFocusScope } from "./OverlayFocusScope";

const FocusScopeFixture = () => {
  const [isOpen, setIsOpen] = useState(false);

  const firstActionRef = useRef<HTMLButtonElement>(null);

  const {
    context,
    refs: { setReference, setFloating },
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  return (
    <>
      <button
        ref={setReference}
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open overlay
      </button>

      {isOpen ? (
        <OverlayFocusScope
          context={context}
          initialFocus={firstActionRef}
          outsideElementsInert
        >
          <div
            ref={setFloating}
            role="dialog"
            aria-label="Example dialog"
            tabIndex={-1}
          >
            <button ref={firstActionRef} type="button">
              First action
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close overlay
            </button>
          </div>
        </OverlayFocusScope>
      ) : null}
    </>
  );
};

describe("OverlayFocusScope", () => {
  it("moves focus into a modal overlay", async () => {
    const user = userEvent.setup();

    render(<FocusScopeFixture />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    const firstAction = screen.getByRole("button", {
      name: "First action",
    });

    await waitFor(() => {
      expect(firstAction).toHaveFocus();
    });
  });

  it("keeps tab focus inside a modal overlay", async () => {
    const user = userEvent.setup();

    render(<FocusScopeFixture />);

    await user.click(
      screen.getByRole("button", {
        name: "Open overlay",
      }),
    );

    const firstAction = screen.getByRole("button", {
      name: "First action",
    });

    const closeAction = screen.getByRole("button", {
      name: "Close overlay",
    });

    await waitFor(() => {
      expect(firstAction).toHaveFocus();
    });

    await user.tab();

    expect(closeAction).toHaveFocus();

    await user.tab();

    await waitFor(() => {
      expect(firstAction).toHaveFocus();
    });
  });

  it("restores focus after the overlay closes", async () => {
    const user = userEvent.setup();

    render(<FocusScopeFixture />);

    const trigger = screen.getByRole("button", {
      name: "Open overlay",
    });

    await user.click(trigger);

    const closeAction = screen.getByRole("button", {
      name: "Close overlay",
    });

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: "First action",
        }),
      ).toHaveFocus();
    });

    await user.click(closeAction);

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });
});
