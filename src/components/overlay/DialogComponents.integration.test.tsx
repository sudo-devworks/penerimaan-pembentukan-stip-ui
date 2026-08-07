import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Button } from "../actions/button";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./index";

describe("Dialog family integration", () => {
  it("keeps regular and destructive task semantics separate", async () => {
    const user = userEvent.setup();

    render(
      <>
        <Dialog>
          <DialogTrigger>Edit participant</DialogTrigger>

          <DialogContent>
            <DialogTitle>Edit participant data</DialogTitle>

            <DialogFooter>
              <DialogClose>Close edit</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
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
              <AlertDialogCancel>Cancel delete</AlertDialogCancel>

              <Button variant="destructive">Confirm delete</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Edit participant",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Edit participant data",
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Close edit",
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: "Delete participant",
      }),
    );

    expect(
      screen.getByRole("alertdialog", {
        name: "Delete participant?",
      }),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: "Cancel delete",
        }),
      ).toHaveFocus();
    });
  });
});
