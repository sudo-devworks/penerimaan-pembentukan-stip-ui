import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const ExampleDialog = ({
  closeOnEscape = true,
  closeOnBackdrop = true,
}: {
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
}) => (
  <Dialog closeOnEscape={closeOnEscape} closeOnBackdrop={closeOnBackdrop}>
    <DialogTrigger>Open participant</DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Participant detail</DialogTitle>

        <DialogDescription>Review participant information.</DialogDescription>
      </DialogHeader>

      <DialogBody>Participant content</DialogBody>

      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

describe("Dialog", () => {
  it("opens from its native trigger", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog />);

    const trigger = screen.getByRole("button", {
      name: "Open participant",
    });

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(
      screen.getByRole("dialog", {
        name: "Participant detail",
      }),
    ).toBeInTheDocument();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("connects title and description semantics", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant",
      }),
    );

    const dialog = screen.getByRole("dialog", {
      name: "Participant detail",
    });

    const title = screen.getByText("Participant detail");

    const description = screen.getByText("Review participant information.");

    expect(dialog).toHaveAttribute("aria-modal", "true");

    expect(dialog).toHaveAttribute("aria-labelledby", title.id);

    expect(dialog).toHaveAttribute("aria-describedby", description.id);
  });

  it("closes through the close action and restores focus", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog />);

    const trigger = screen.getByRole("button", {
      name: "Open participant",
    });

    await user.click(trigger);

    await user.click(
      screen.getByRole("button", {
        name: "Close",
      }),
    );

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      expect(trigger).toHaveFocus();
    });
  });

  it("closes through Escape by default", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog closeOnEscape={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes through backdrop interaction by default", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant",
      }),
    );

    const dialog = screen.getByRole("dialog");

    const backdrop = dialog.parentElement;

    expect(backdrop).not.toBeNull();

    await user.click(backdrop as HTMLElement);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can prevent backdrop dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleDialog closeOnBackdrop={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open participant",
      }),
    );

    const dialog = screen.getByRole("dialog");

    await user.click(dialog.parentElement as HTMLElement);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("supports controlled state and reports close reasons", async () => {
    const user = userEvent.setup();

    const onOpenChange = vi.fn();

    const { rerender } = render(
      <Dialog open={false} onOpenChange={onOpenChange}>
        <DialogTrigger>Open controlled</DialogTrigger>

        <DialogContent aria-label="Controlled dialog">
          Controlled content
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open controlled",
      }),
    );

    expect(onOpenChange).toHaveBeenCalledWith(true, {
      reason: "trigger-toggle",
    });

    rerender(
      <Dialog open onOpenChange={onOpenChange}>
        <DialogTrigger>Open controlled</DialogTrigger>

        <DialogContent aria-label="Controlled dialog">
          Controlled content
        </DialogContent>
      </Dialog>,
    );

    await user.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false, {
      reason: "escape-key",
    });
  });

  it("allows close prevention from a close action", async () => {
    const user = userEvent.setup();

    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>

        <DialogContent aria-label="Example dialog">
          <DialogClose
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Keep open
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open dialog",
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
