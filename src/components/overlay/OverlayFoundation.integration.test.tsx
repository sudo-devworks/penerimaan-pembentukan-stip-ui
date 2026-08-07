import { createContext, useContext, useRef, useState } from "react";
import { useFloating } from "@floating-ui/react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { OverlayBackdrop, OverlayFocusScope, OverlayPortal } from "./index";

const ExampleContext = createContext("missing");

const PortalConsumer = () => {
  const value = useContext(ExampleContext);

  return <div data-testid="context-value">{value}</div>;
};

const ModalFixture = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeActionRef = useRef<HTMLButtonElement>(null);

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
        Open modal
      </button>

      {isOpen ? (
        <OverlayPortal>
          <OverlayBackdrop
            lockScroll
            onBackdropClick={() => {
              setIsOpen(false);
            }}
          >
            <OverlayFocusScope
              context={context}
              initialFocus={closeActionRef}
              outsideElementsInert
            >
              <div
                ref={setFloating}
                role="dialog"
                aria-modal="true"
                aria-label="Foundation modal"
                tabIndex={-1}
              >
                <PortalConsumer />

                <button
                  ref={closeActionRef}
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Close modal
                </button>
              </div>
            </OverlayFocusScope>
          </OverlayBackdrop>
        </OverlayPortal>
      ) : null}
    </>
  );
};

describe("Overlay foundation integration", () => {
  it("combines portal, backdrop, context, focus, and scroll lock", async () => {
    const user = userEvent.setup();

    render(
      <ExampleContext.Provider value="available">
        <ModalFixture />
      </ExampleContext.Provider>,
    );

    const trigger = screen.getByRole("button", {
      name: "Open modal",
    });

    await user.click(trigger);

    const dialog = screen.getByRole("dialog", {
      name: "Foundation modal",
    });

    expect(dialog).toBeInTheDocument();

    expect(screen.getByTestId("context-value")).toHaveTextContent("available");

    expect(document.body).toContainElement(dialog);

    const closeAction = screen.getByRole("button", {
      name: "Close modal",
    });

    await waitFor(() => {
      expect(closeAction).toHaveFocus();
    });

    expect(document.body.style.overflow).toBe("hidden");

    await user.click(closeAction);

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
    });

    expect(document.body.style.overflow).toBe("");
  });
});
