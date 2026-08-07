import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "../../actions/button";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

const ExampleAlertDialog = ({
  closeOnEscape = true,
}: {
  closeOnEscape?: boolean;
}) => (
  <AlertDialog closeOnEscape={closeOnEscape}>
    <AlertDialogTrigger variant="destructive">
      Delete participant
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete participant?</AlertDialogTitle>

        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <Button variant="destructive">Confirm delete</Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

describe("AlertDialog", () => {
  it("uses alertdialog semantics", async () => {
    const user = userEvent.setup();

    render(<ExampleAlertDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Delete participant",
      }),
    );

    const dialog = screen.getByRole("alertdialog", {
      name: "Delete participant?",
    });

    expect(dialog).toHaveAttribute("aria-modal", "true");

    expect(dialog).toHaveAccessibleDescription("This action cannot be undone.");
  });

  it("focuses the safe cancel action by default", async () => {
    const user = userEvent.setup();

    render(<ExampleAlertDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Delete participant",
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: "Cancel",
        }),
      ).toHaveFocus();
    });
  });

  it("does not dismiss through backdrop interaction by default", async () => {
    const user = userEvent.setup();

    render(<ExampleAlertDialog />);

    await user.click(
      screen.getByRole("button", {
        name: "Delete participant",
      }),
    );

    const dialog = screen.getByRole("alertdialog");

    await user.click(dialog.parentElement as HTMLElement);

    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  it("closes through the cancel action and restores focus", async () => {
    const user = userEvent.setup();

    render(<ExampleAlertDialog />);

    const trigger = screen.getByRole("button", {
      name: "Delete participant",
    });

    await user.click(trigger);

    await user.click(
      screen.getByRole("button", {
        name: "Cancel",
      }),
    );

    await waitFor(() => {
      expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

      expect(trigger).toHaveFocus();
    });
  });

  it("can prevent Escape dismissal", async () => {
    const user = userEvent.setup();

    render(<ExampleAlertDialog closeOnEscape={false} />);

    await user.click(
      screen.getByRole("button", {
        name: "Delete participant",
      }),
    );

    await user.keyboard("{Escape}");

    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  it("does not automatically run or close confirmation flow", async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();

    render(
      <AlertDialog>
        <AlertDialogTrigger>Start action</AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm action</AlertDialogTitle>

            <AlertDialogDescription>
              Review before continuing.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <Button variant="destructive" onClick={onConfirm}>
              Continue
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Start action",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Continue",
      }),
    );

    expect(onConfirm).toHaveBeenCalledTimes(1);

    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });
});
