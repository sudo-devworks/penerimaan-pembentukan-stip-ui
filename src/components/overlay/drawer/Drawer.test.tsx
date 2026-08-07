import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";

const ExampleDrawer = ({
  placement = "right",
  closeOnEscape = true,
  closeOnBackdrop = true,
}: {
  placement?: "left" | "right" | "top" | "bottom";
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
}) => (
  <Drawer closeOnEscape={closeOnEscape} closeOnBackdrop={closeOnBackdrop}>
    <DrawerTrigger>Open filters</DrawerTrigger>

    <DrawerContent placement={placement}>
      <DrawerHeader>
        <DrawerTitle>Participant filters</DrawerTitle>

        <DrawerDescription>Narrow the participant list.</DrawerDescription>
      </DrawerHeader>

      <DrawerBody>Filter content</DrawerBody>

      <DrawerFooter>
        <DrawerClose variant="outline">Close filters</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

describe("Drawer", () => {
  it("opens from its native trigger", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer />);

    const trigger = screen.getByRole("button", {
      name: "Open filters",
    });

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(
      screen.getByRole("dialog", {
        name: "Participant filters",
      }),
    ).toBeInTheDocument();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("connects title and description semantics", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer />);

    await user.click(
      screen.getByRole("button", {
        name: "Open filters",
      }),
    );

    const drawer = screen.getByRole("dialog", {
      name: "Participant filters",
    });

    expect(drawer).toHaveAttribute("aria-modal", "true");

    expect(drawer).toHaveAccessibleDescription("Narrow the participant list.");
  });

  it.each(["left", "right", "top", "bottom"] as const)(
    "supports %s placement",
    async (placement) => {
      const user = userEvent.setup();

      render(<ExampleDrawer placement={placement} />);

      await user.click(
        screen.getByRole("button", {
          name: "Open filters",
        }),
      );

      expect(screen.getByRole("dialog")).toHaveAttribute(
        "data-placement",
        placement,
      );
    },
  );

  it("closes through its close action and restores focus", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer />);

    const trigger = screen.getByRole("button", {
      name: "Open filters",
    });

    await user.click(trigger);

    await user.click(
      screen.getByRole("button", {
        name: "Close filters",
      }),
    );

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      expect(trigger).toHaveFocus();
    });
  });

  it("closes with Escape by default", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer />);

    await user.click(
      screen.getByRole("button", {
        name: "Open filters",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer closeOnEscape={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open filters",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes through backdrop interaction by default", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer />);

    await user.click(
      screen.getByRole("button", {
        name: "Open filters",
      }),
    );

    const drawer = screen.getByRole("dialog");

    await user.click(drawer.parentElement as HTMLElement);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can prevent backdrop dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleDrawer closeOnBackdrop={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open filters",
      }),
    );

    const drawer = screen.getByRole("dialog");

    await user.click(drawer.parentElement as HTMLElement);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("reports controlled state reasons", async () => {
    const user = userEvent.setup();

    const onOpenChange = vi.fn();

    const { rerender } = render(
      <Drawer open={false} onOpenChange={onOpenChange}>
        <DrawerTrigger>Open controlled drawer</DrawerTrigger>

        <DrawerContent aria-label="Controlled drawer">
          Drawer content
        </DrawerContent>
      </Drawer>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open controlled drawer",
      }),
    );

    expect(onOpenChange).toHaveBeenCalledWith(true, {
      reason: "trigger-toggle",
    });

    rerender(
      <Drawer open onOpenChange={onOpenChange}>
        <DrawerTrigger>Open controlled drawer</DrawerTrigger>

        <DrawerContent aria-label="Controlled drawer">
          Drawer content
        </DrawerContent>
      </Drawer>,
    );

    await user.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false, {
      reason: "escape-key",
    });
  });

  it("allows close prevention", async () => {
    const user = userEvent.setup();

    render(
      <Drawer>
        <DrawerTrigger>Open drawer</DrawerTrigger>

        <DrawerContent aria-label="Example drawer">
          <DrawerClose
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Keep open
          </DrawerClose>
        </DrawerContent>
      </Drawer>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open drawer",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Keep open",
      }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
